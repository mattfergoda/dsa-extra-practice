"""Boggle word check.

Given a 5x5 boggle board, see if you can find a given word in it.

In Boggle, you can start with any letter, then move in any NEWS direction.
You can continue to change directions, but you cannot use the exact same
tile twice.

So, for example::

    N C A N E
    O U I O P
    Z Q Z O N
    F A D P L
    E D E A Z

In this grid, you could find `NOON* (start at the `N` in the top
row, head south, and turn east in the third row). You cannot find
the word `CANON` --- while you can find `CANO` by starting at the
top-left `C`, you can 't re-use the exact same `N` tile on the
front row, and there's no other `N` you can reach.

For example::

    >>> board = make_board('''
    ... N C A N E
    ... O U I O P
    ... Z Q Z O N
    ... F A D P L
    ... E D E A Z
    ... ''')

`NOON` should be found (0, 3) -> (1, 3) -> (2, 3) -> (2, 4)::

    >>> find(board, "NOON")
    True

`NOPE` should be found (0, 3) -> (1, 3) -> (1, 4) -> (0, 4)::

    >>> find(board, "NOPE")
    True

`CANON` can't be found (`CANO` starts at (0, 1) but can't find
the last `N` and can't re-use the N)::

    >>> find(board, "CANON")
    False

You cannot travel diagonally in one move, which would be required
to find `QUINE`::

    >>> find(board, "QUINE")
    False

We can recover if we start going down a false path (start 3, 0)::

    >>> find(board, "FADED")
    True


An extra tricky case --- it needs to find the `N` toward the top right,
and then go down, left, up, up, right to find all four `O`s and the `S`::

    >>> board2 = make_board('''
    ... E D O S Z
    ... N S O N R
    ... O U O O P
    ... Z Q Z O R
    ... F A D P L
    ... ''')

    >>> find(board2, "NOOOOS")
    True

"""


def make_board(board_string):
    """Make a board from a string.

    For example::

        >>> board = make_board('''
        ... N C A N E
        ... O U I O P
        ... Z Q Z O N
        ... F A D P L
        ... E D E A Z
        ... ''')

        >>> len(board)
        5

        >>> board[0]
        ['N', 'C', 'A', 'N', 'E']
    """

    letters = board_string.split()

    board = [
        letters[0:5],
        letters[5:10],
        letters[10:15],
        letters[15:20],
        letters[20:25],
    ]

    return board



def find(board, word):
    """Can word be found in board?"""

    def _find(board, word, start_i, start_j, seen):
        if word == "":
            return True
        
        seen.append((start_i, start_j))

        # North
        if (start_i > 0 and 
            (start_i - 1, start_j) not in seen and 
            board[start_i - 1][start_j] == word[0] and
            _find(board, word[1:], start_i - 1, start_j, seen)):
            return True
        
        # South
        if (start_i < len(board) - 1 and 
            (start_i + 1, start_j) not in seen and 
            board[start_i + 1][start_j] == word[0]
            and _find(board, word[1:], start_i + 1, start_j, seen)):
            return True
        
        # East
        if (start_j < len(board[0]) - 1 and 
            (start_i, start_j + 1) not in seen and 
            board[start_i][start_j + 1] == word[0] and
            _find(board, word[1:], start_i, start_j + 1, seen)):
            return True
        
        # West
        if (start_j > 0 and 
            (start_i, start_j - 1) not in seen and 
            board[start_i][start_j - 1] == word[0] and
            _find(board, word[1:], start_i, start_j - 1, seen)):
            return True
        
        return False
    
    # Look for the first letter
    for i, _ in enumerate(board):
        for j, _ in enumerate(board[i]):
            if board[i][j] == word[0]:
                if _find(board, word[1:], i, j, []):
                    return True
                else: 
                    pass
            
    return False


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASSED; YOU FOUND SUCCESS! ***\n")
