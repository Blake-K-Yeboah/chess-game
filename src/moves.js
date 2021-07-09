export const knightIds = {
   1: [18, 11],
   2: [17, 19, 12],
   3: [18, 9, 20, 13],
   4: [14, 21, 19, 10],
   5: [15, 22, 20, 11],
   6: [16, 23, 21, 12],
   7: [22, 24, 13],
   8: [23, 14],
   9: [26, 19, 3],
   10: [25, 27, 20, 4],
   11: [26, 28, 21, 5, 1, 17],
   12: [27, 29, 22, 6, 2, 18],
   13: [28, 30, 23, 7, 3, 19],
   14: [29, 31, 24, 8, 4, 20],
   15: [21, 5, 30, 32],
   16: [31, 22, 6],
   17: [2, 11, 27, 34],
   18: [33, 35, 28, 12, 3, 1],
   19: [9, 2, 4, 13, 29, 36, 34, 25],
   20: [3, 5, 14, 30, 37, 35, 26, 10],
   21: [4, 6, 15, 31, 38, 36, 27, 11],
   22: [5, 7, 16, 32, 39, 37, 28, 12],
   23: [6, 8, 40, 38, 29, 13],
   24: [7, 14, 30, 39],
   25: [10, 19, 35, 42],
   26: [9, 11, 20, 36, 43, 41],
   27: [10, 12, 21, 37, 44, 42, 33, 17],
   28: [11, 13, 22, 38, 45, 43, 34, 18],
   29: [12, 14, 23, 39, 46, 44, 35, 19],
   30: [13, 15, 24, 40, 47, 45, 36, 20],
   31: [14, 16, 48, 46, 37, 21],
   32: [15, 22, 38, 47],
   33: [18, 27, 43, 50],
   34: [17, 19, 28, 44, 51, 49],
   35: [18, 20, 29, 45, 52, 50, 41, 25],
   36: [19, 21, 30, 46, 53, 51, 42, 26],
   37: [20, 22, 31, 47, 54, 52, 43, 27],
   38: [21, 23, 32, 48, 55, 53, 44, 28],
   39: [22, 24, 56, 54, 45, 29],
   40: [23, 30, 46, 55],
   41: [26, 35, 51, 58],
   42: [25, 27, 36, 52, 59, 57],
   43: [26, 28, 37, 53, 60, 58, 49, 33],
   44: [27, 29, 38, 54, 61, 59, 50, 34],
   45: [28, 30, 39, 55, 62, 60, 51, 35],
   46: [29, 31, 40, 56, 63, 61, 52, 36],
   47: [30, 32, 64, 62, 53, 37],
   48: [31, 38, 54, 63],
   49: [34, 43, 59],
   50: [33, 35, 44, 60],
   51: [34, 36, 45, 61, 57, 41],
   52: [35, 37, 46, 62, 58, 42],
   53: [36, 38, 47, 63, 59, 43],
   54: [37, 39, 48, 64, 60, 44],
   55: [38, 40, 61, 45],
   56: [39, 46, 62],
   57: [42, 51],
   58: [41, 43, 52],
   59: [49, 42, 44, 53],
   60: [50, 43, 45, 54],
   61: [51, 44, 46, 55],
   62: [52, 45, 47, 56],
   63: [53, 46, 48],
   64: [47, 54],
};

export const diagonalIds = {
   1: {
      top_left: [],
      top_right: [],
      bottom_right: [10, 19, 28, 37, 46, 55, 64],
      bottom_left: [],
   },
   2: {
      top_left: [],
      top_right: [],
      bottom_right: [11, 20, 29, 38, 47, 56],
      bottom_left: [9],
   },
   3: {
      top_left: [],
      top_right: [],
      bottom_right: [12, 21, 30, 39, 48],
      bottom_left: [10, 17],
   },
   4: {
      top_left: [],
      top_right: [],
      bottom_right: [13, 22, 31, 40],
      bottom_left: [11, 18, 25],
   },
   5: {
      top_left: [],
      top_right: [],
      bottom_right: [14, 23, 32],
      bottom_left: [12, 19, 26, 33],
   },
   6: {
      top_left: [],
      top_right: [],
      bottom_right: [15, 24],
      bottom_left: [13, 20, 27, 34, 41],
   },
   7: {
      top_left: [],
      top_right: [],
      bottom_right: [16],
      bottom_left: [14, 21, 28, 35, 42, 49],
   },
   8: {
      top_left: [],
      top_right: [],
      bottom_right: [],
      bottom_left: [15, 22, 29, 36, 43, 50, 57],
   },
   9: {
      top_left: [],
      top_right: [2],
      bottom_right: [18, 27, 36, 45, 54, 63],
      bottom_left: [],
   },
   10: {
      top_left: [1],
      top_right: [3],
      bottom_right: [19, 28, 37, 46, 55, 64],
      bottom_left: [17],
   },
   11: {
      top_left: [2],
      top_right: [4],
      bottom_right: [20, 29, 38, 47, 56],
      bottom_left: [18, 25],
   },
   12: {
      top_left: [3],
      top_right: [5],
      bottom_right: [21, 30, 39, 48],
      bottom_left: [19, 26, 33],
   },
   13: {
      top_left: [4],
      top_right: [6],
      bottom_right: [22, 31, 40],
      bottom_left: [20, 27, 34, 41],
   },
   14: {
      top_left: [5],
      top_right: [7],
      bottom_right: [23, 32],
      bottom_left: [21, 28, 35, 42, 49],
   },
   15: {
      top_left: [6],
      top_right: [8],
      bottom_right: [24],
      bottom_left: [22, 29, 36, 43, 50, 57],
   },
   16: {
      top_left: [7],
      top_right: [],
      bottom_right: [],
      bottom_left: [23, 30, 37, 44, 51, 58],
   },
   17: {
      top_left: [],
      top_right: [10, 3],
      bottom_right: [26, 35, 44, 53, 62],
      bottom_left: [],
   },
   18: {
      top_left: [9],
      top_right: [11, 4],
      bottom_right: [27, 36, 45, 54, 63],
      bottom_left: [25],
   },
   19: {
      top_left: [10, 1],
      top_right: [12, 5],
      bottom_right: [28, 37, 46, 55, 64],
      bottom_left: [26, 33],
   },
   20: {
      top_left: [11, 2],
      top_right: [13, 6],
      bottom_right: [29, 38, 47, 56],
      bottom_left: [27, 34, 41],
   },
   21: {
      top_left: [12, 3],
      top_right: [14, 7],
      bottom_right: [30, 39, 48],
      bottom_left: [28, 35, 42, 49],
   },
   22: {
      top_left: [13, 4],
      top_right: [15, 8],
      bottom_right: [31, 40],
      bottom_left: [29, 36, 43, 50, 57],
   },
   23: {
      top_left: [14, 5],
      top_right: [16],
      bottom_right: [32],
      bottom_left: [30, 37, 44, 51, 58],
   },
   24: {
      top_left: [15, 6],
      top_right: [],
      bottom_right: [],
      bottom_left: [31, 38, 45, 52, 59],
   },
   25: {
      top_left: [],
      top_right: [18, 11, 4],
      bottom_right: [34, 43, 52, 61],
      bottom_left: [],
   },
   26: {
      top_left: [17],
      top_right: [19, 12, 5],
      bottom_right: [35, 44, 53, 62],
      bottom_left: [33],
   },
   27: {
      top_left: [18, 9],
      top_right: [20, 13, 6],
      bottom_right: [36, 45, 54, 63],
      bottom_left: [34, 41],
   },
   28: {
      top_left: [19, 10, 1],
      top_right: [21, 14, 7],
      bottom_right: [37, 46, 55, 64],
      bottom_left: [35, 42, 49],
   },
   29: {
      top_left: [20, 11, 2],
      top_right: [22, 15, 8],
      bottom_right: [38, 47, 56],
      bottom_left: [36, 43, 50, 57],
   },
   30: {
      top_left: [21, 12, 3],
      top_right: [23, 16],
      bottom_right: [39, 48],
      bottom_left: [37, 44, 51, 58],
   },
   31: {
      top_left: [22, 13, 4],
      top_right: [24],
      bottom_right: [40],
      bottom_left: [38, 45, 52, 59],
   },
   32: {
      top_left: [23, 14, 5],
      top_right: [],
      bottom_right: [],
      bottom_left: [39, 46, 53, 60],
   },
   33: {
      top_left: [],
      top_right: [26, 19, 12, 5],
      bottom_right: [42, 51, 60],
      bottom_left: [],
   },
   34: {
      top_left: [25],
      top_right: [27, 20, 13, 6],
      bottom_right: [43, 52, 61],
      bottom_left: [41],
   },
   35: {
      top_left: [26, 17],
      top_right: [28, 21, 14, 7],
      bottom_right: [44, 53, 62],
      bottom_left: [42, 9],
   },
   36: {
      top_left: [27, 18, 9],
      top_right: [29, 22, 15, 8],
      bottom_right: [45, 54, 63],
      bottom_left: [43, 50, 57],
   },
   37: {
      top_left: [28, 19, 10, 1],
      top_right: [30, 23, 16],
      bottom_right: [46, 55, 64],
      bottom_left: [44, 51, 58],
   },
   38: {
      top_left: [29, 20, 11, 2],
      top_right: [31, 24],
      bottom_right: [47, 56],
      bottom_left: [45, 52, 59],
   },
   39: {
      top_left: [30, 21, 12, 3],
      top_right: [32],
      bottom_right: [48],
      bottom_left: [46, 53, 60],
   },
   40: {
      top_left: [31, 22, 13, 4],
      top_right: [],
      bottom_right: [],
      bottom_left: [47, 54, 61],
   },
   41: {
      top_left: [],
      top_right: [34, 27, 20, 13, 6],
      bottom_right: [50, 59],
      bottom_left: [],
   },
   42: {
      top_left: [33],
      top_right: [35, 28, 21, 14, 7],
      bottom_right: [51, 60],
      bottom_left: [49],
   },
   43: {
      top_left: [34, 25],
      top_right: [36, 29, 22, 15, 8],
      bottom_right: [52, 61],
      bottom_left: [50, 57],
   },
   44: {
      top_left: [35, 26, 17],
      top_right: [37, 30, 23, 16],
      bottom_right: [53, 62],
      bottom_left: [51, 58],
   },
   45: {
      top_left: [36, 27, 18, 9],
      top_right: [38, 31, 24],
      bottom_right: [54, 63],
      bottom_left: [52, 59],
   },
   46: {
      top_left: [37, 28, 19, 10, 1],
      top_right: [39, 32],
      bottom_right: [55, 64],
      bottom_left: [53, 60],
   },
   47: {
      top_left: [38, 29, 20, 11, 2],
      top_right: [40],
      bottom_right: [56],
      bottom_left: [54, 61],
   },
   48: {
      top_left: [39, 30, 21, 12, 3],
      top_right: [],
      bottom_right: [],
      bottom_left: [55, 62],
   },
   49: {
      top_left: [],
      top_right: [42, 35, 28, 21, 14, 7],
      bottom_right: [58],
      bottom_left: [],
   },
   50: {
      top_left: [41],
      top_right: [43, 36, 29, 22, 15, 8],
      bottom_right: [59],
      bottom_left: [57],
   },
   51: {
      top_left: [42, 33],
      top_right: [44, 37, 30, 23, 16],
      bottom_right: [60],
      bottom_left: [58],
   },
   52: {
      top_left: [43, 34, 25],
      top_right: [45, 38, 31, 24],
      bottom_right: [61],
      bottom_left: [59],
   },
   53: {
      top_left: [44, 35, 26, 17],
      top_right: [46, 39, 32],
      bottom_right: [62],
      bottom_left: [60],
   },
   54: {
      top_left: [45, 36, 27, 18, 9],
      top_right: [47, 40],
      bottom_right: [63],
      bottom_left: [61],
   },
   55: {
      top_left: [46, 37, 28, 19, 10, 1],
      top_right: [48],
      bottom_right: [64],
      bottom_left: [62],
   },
   56: {
      top_left: [47, 38, 29, 20, 11, 2],
      top_right: [],
      bottom_right: [],
      bottom_left: [63],
   },
   57: {
      top_left: [],
      top_right: [50, 43, 36, 29, 22, 15, 8],
      bottom_right: [],
      bottom_left: [],
   },
   58: {
      top_left: [49],
      top_right: [51, 44, 37, 30, 23, 16],
      bottom_right: [],
      bottom_left: [],
   },
   59: {
      top_left: [50, 41],
      top_right: [52, 45, 38, 31, 24],
      bottom_right: [],
      bottom_left: [],
   },
   60: {
      top_left: [51, 42, 33],
      top_right: [53, 46, 39, 32],
      bottom_right: [],
      bottom_left: [],
   },
   61: {
      top_left: [52, 43, 34, 25],
      top_right: [54, 47, 40],
      bottom_right: [],
      bottom_left: [],
   },
   62: {
      top_left: [53, 44, 35, 26, 17],
      top_right: [55, 48],
      bottom_right: [],
      bottom_left: [],
   },
   63: {
      top_left: [54, 45, 36, 27, 18, 9],
      top_right: [56],
      bottom_right: [],
      bottom_left: [],
   },
   64: {
      top_left: [55, 46, 37, 28, 19, 1],
      top_right: [],
      bottom_right: [],
      bottom_left: [],
   },
};
