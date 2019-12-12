const input = [2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0,2,0,2,2,2,1,2,2,2,0,2,2,2,0,2,2,2,2,0,2,2,2,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,0,2,2,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,0,2,0,2,2,0,2,2,2,2,0,1,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,0,2,0,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,1,2,2,2,2,0,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,0,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,0,2,1,2,2,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,0,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,0,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,1,2,2,2,2,2,0,2,2,2,2,2,2,2,1,0,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,0,2,0,2,2,1,2,2,2,2,0,1,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,0,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,0,2,2,2,2,0,2,2,2,2,1,1,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,1,0,0,2,0,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0,2,2,2,2,0,1,2,2,2,2,2,1,2,2,2,2,2,2,2,1,0,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,1,2,2,0,2,0,2,2,2,2,2,1,2,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,0,2,2,2,2,1,2,1,2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,0,2,2,2,2,1,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,2,0,2,2,2,2,0,2,2,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,0,1,2,2,2,2,0,2,2,0,2,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1,1,2,2,2,1,2,0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,1,2,2,1,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,1,2,2,2,2,2,2,2,0,0,2,2,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,1,2,2,0,2,2,2,2,0,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,1,2,2,2,2,2,0,1,2,0,2,0,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,1,0,2,2,2,1,2,0,2,2,2,1,2,2,2,1,2,2,1,2,2,2,2,2,0,2,2,2,2,0,1,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,1,2,2,2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,0,2,0,2,0,2,2,2,2,2,0,2,2,0,0,2,2,2,2,1,2,2,2,2,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,0,2,2,2,0,0,2,0,0,2,1,2,2,2,2,0,1,2,2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,0,2,1,2,2,2,1,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,0,1,2,2,2,2,2,2,0,1,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,2,1,2,1,2,2,2,1,2,2,2,0,2,2,2,2,1,2,2,2,2,1,1,2,2,2,2,2,0,2,2,2,2,2,2,2,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,1,2,2,2,1,0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,0,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,1,2,1,2,1,2,1,2,2,2,1,2,2,1,1,2,2,2,2,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,1,2,1,1,2,0,2,2,2,2,1,1,2,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,0,2,2,2,2,2,2,0,1,2,2,2,1,1,2,2,2,2,0,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,0,2,1,2,2,2,2,0,0,2,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,1,1,2,2,2,2,2,2,0,0,2,2,2,2,1,2,2,0,2,2,2,2,2,1,2,2,1,0,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,0,2,1,2,0,2,1,2,2,2,0,2,2,2,0,2,2,2,2,0,2,2,2,2,2,0,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,1,0,2,2,2,2,2,2,2,2,2,1,0,2,2,0,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,1,2,1,2,2,1,2,2,2,2,1,2,2,2,0,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,1,2,2,2,1,2,2,2,2,2,2,0,2,2,2,2,2,1,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,0,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,0,2,2,2,2,2,0,2,2,1,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,0,2,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,0,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,2,1,2,2,2,2,1,0,2,2,1,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,2,1,2,0,2,2,2,1,2,2,0,0,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,1,2,0,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,2,2,2,2,2,0,1,2,1,2,2,2,2,0,2,2,2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,1,1,2,2,2,2,2,2,1,0,2,2,2,2,0,0,2,0,2,1,2,2,2,1,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,1,2,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,1,2,2,2,2,0,2,0,1,2,2,2,2,2,2,1,2,2,2,0,1,2,0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,2,2,0,0,2,2,2,2,2,2,1,0,2,2,2,0,0,1,2,2,2,2,2,2,2,2,2,2,0,1,2,2,2,2,0,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,2,0,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,2,1,2,2,2,2,2,1,2,2,1,2,2,2,0,1,2,0,2,2,2,2,2,2,2,1,1,2,2,2,1,2,0,2,2,2,2,2,2,2,2,2,2,1,2,2,0,1,2,1,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,1,1,0,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2,1,0,2,0,2,2,2,0,2,2,2,2,2,2,2,1,0,2,2,2,1,2,1,2,2,2,2,2,2,2,1,1,2,2,0,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,1,2,2,1,2,2,2,0,2,2,2,1,2,0,2,2,2,2,2,1,2,2,1,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,2,1,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,1,2,2,1,1,2,2,2,2,2,2,1,2,2,2,2,0,1,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,0,2,2,2,0,2,2,2,2,2,2,2,1,0,2,2,1,1,2,0,2,2,2,0,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,2,2,0,2,2,2,2,0,2,1,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,1,0,2,2,2,1,0,2,2,2,2,1,2,2,2,0,2,2,0,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,1,2,2,1,2,2,2,1,2,2,2,1,0,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,0,2,0,0,2,2,0,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,1,2,2,2,2,2,2,0,2,2,2,2,1,0,0,2,0,2,2,2,2,2,1,2,2,2,0,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,0,1,2,2,1,2,2,1,2,2,2,0,2,2,2,1,0,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,2,1,0,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,0,2,2,1,1,2,2,2,2,2,2,1,0,2,2,2,1,0,1,2,0,2,1,2,2,2,0,2,2,2,0,2,2,2,2,1,2,2,2,2,1,0,2,0,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,1,2,1,2,2,2,0,2,2,2,1,1,2,2,1,2,0,2,2,2,2,2,0,2,0,2,0,2,2,2,0,2,2,0,2,2,2,2,2,2,1,0,2,2,2,2,1,2,2,1,2,2,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,1,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,1,2,1,2,0,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,0,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,1,2,1,2,0,0,2,2,0,2,2,2,2,2,2,0,1,2,2,2,2,1,2,2,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,0,2,2,2,2,2,1,0,2,2,2,0,2,2,0,1,2,2,1,0,2,2,2,2,1,2,2,2,2,0,0,2,1,2,2,2,1,2,2,2,2,2,2,2,0,1,2,2,0,1,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,0,2,2,2,2,2,0,2,0,2,1,1,2,2,0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,0,1,1,1,2,2,0,0,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,2,0,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,1,2,2,1,0,2,2,2,2,2,2,2,2,2,2,2,1,0,1,2,1,2,2,2,2,2,2,2,0,0,1,2,2,2,2,0,2,2,2,2,1,0,2,1,2,2,2,0,2,2,2,2,2,2,2,1,0,2,2,0,1,2,2,2,2,2,1,2,2,2,1,1,2,2,2,2,0,2,2,2,2,2,2,2,2,2,1,1,2,2,0,2,2,2,2,2,2,1,0,2,2,2,2,2,2,2,2,2,2,1,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,1,2,2,1,1,2,2,2,2,2,2,1,0,2,2,2,1,2,0,2,0,2,0,2,2,1,1,2,0,1,0,2,2,2,2,0,2,2,2,2,1,0,2,0,2,2,2,1,2,2,2,2,2,2,2,0,2,1,2,0,1,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,0,2,2,1,2,2,2,2,2,0,2,2,0,2,2,2,2,1,2,0,2,2,2,1,0,1,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,0,0,2,2,2,0,1,1,2,0,2,1,2,2,0,2,2,2,2,0,2,2,2,2,1,2,2,2,2,2,0,2,1,2,2,2,1,2,2,2,2,2,2,2,1,0,1,2,0,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,2,2,2,2,2,2,2,1,2,0,1,2,2,1,2,2,2,2,2,0,1,2,2,2,0,2,0,2,2,1,2,0,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,0,2,2,0,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,2,2,2,1,2,2,0,0,2,1,1,1,2,2,2,2,1,2,2,2,2,2,0,2,2,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,2,0,2,1,2,2,2,1,2,2,2,1,0,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,0,0,2,1,2,2,0,2,0,0,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,0,2,2,0,0,2,2,2,2,2,2,0,1,2,2,2,0,1,0,2,0,2,2,2,2,0,1,2,1,2,0,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,1,2,1,2,0,2,2,1,2,2,2,1,2,2,2,2,0,2,2,0,2,1,2,2,2,2,2,0,2,1,2,2,0,2,2,0,2,2,1,2,2,2,2,2,2,2,1,2,0,2,2,1,2,0,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,1,0,2,2,2,2,2,2,0,0,2,2,2,1,1,0,2,0,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,2,2,2,2,2,1,2,2,2,2,2,2,2,0,2,0,2,2,1,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,2,2,0,2,2,2,2,2,2,0,0,2,0,2,2,0,2,2,1,2,1,1,2,2,2,2,2,1,0,2,2,2,2,2,2,2,2,0,0,2,0,0,2,2,1,2,2,2,2,2,2,2,2,0,1,2,2,2,2,2,2,2,0,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,0,2,2,2,2,2,2,0,2,2,2,0,0,2,2,1,2,0,2,2,2,2,2,1,2,0,2,0,2,2,2,1,2,2,2,2,2,1,2,1,2,1,2,2,1,2,2,0,0,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,1,0,2,1,0,2,2,0,2,2,2,2,2,2,2,2,1,0,2,2,0,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,1,1,2,2,2,0,0,2,2,0,2,2,2,2,1,2,2,1,2,2,2,2,2,2,0,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1,0,2,2,2,2,2,1,2,2,2,0,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,1,2,2,1,2,0,2,2,1,2,1,0,2,2,0,2,2,1,0,2,2,2,2,2,2,2,2,0,1,2,1,1,0,2,1,2,2,2,2,2,2,2,2,0,1,2,2,1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,0,2,2,2,2,0,1,2,2,1,2,2,2,2,1,1,2,0,2,2,2,2,2,2,1,2,2,2,2,0,0,2,1,2,2,2,0,2,2,2,2,2,2,2,0,0,1,2,2,1,2,0,2,2,2,1,2,2,2,0,0,2,2,0,2,2,2,2,2,2,2,1,2,2,2,0,1,0,2,0,2,2,0,2,2,2,2,0,2,2,1,2,2,2,2,2,0,1,2,2,2,1,0,2,1,1,2,2,2,2,2,2,0,2,0,0,2,1,0,1,2,1,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,0,2,2,1,0,2,2,2,2,2,2,2,2,2,2,2,2,0,1,2,1,2,0,2,2,1,2,2,0,1,2,2,2,2,2,1,2,2,2,2,1,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,0,0,2,1,2,0,2,2,2,2,2,2,2,0,1,1,2,0,2,2,1,2,2,1,0,1,1,2,2,0,2,2,1,1,2,2,2,2,2,2,1,2,0,1,2,2,1,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,2,2,2,2,1,2,2,1,2,1,2,2,1,2,2,2,0,0,2,2,2,2,1,2,2,2,2,0,2,2,1,2,2,2,0,2,2,2,2,2,2,2,1,2,0,2,2,0,2,0,2,2,2,1,2,2,2,0,2,2,2,2,2,1,2,2,2,2,2,0,1,1,2,1,0,0,2,2,2,0,1,2,2,1,1,1,2,1,0,2,2,2,2,2,0,0,1,2,2,1,0,2,0,0,2,2,2,2,2,2,0,2,1,1,2,2,0,0,2,0,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,1,2,2,2,2,2,2,1,0,2,2,2,0,0,2,2,1,2,2,2,2,0,2,2,0,0,1,2,2,2,2,1,2,2,2,2,2,1,2,0,2,2,2,0,2,2,2,2,2,2,2,1,2,0,2,0,2,2,1,2,2,2,0,2,2,2,0,1,2,2,1,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,2,1,1,2,2,0,2,1,2,0,1,2,2,2,2,0,2,2,1,2,2,0,0,2,1,2,2,2,2,2,2,2,1,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,1,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,0,0,1,2,1,2,0,2,2,1,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0,2,2,2,1,2,2,2,2,2,2,2,0,1,1,0,2,1,2,0,2,2,2,2,2,2,2,2,0,2,2,1,2,2,1,2,2,2,2,1,0,1,2,0,0,0,2,2,2,2,0,2,2,1,1,0,2,2,0,2,1,2,2,0,0,2,1,2,2,1,1,2,0,2,2,2,2,2,2,2,1,2,2,2,2,0,2,0,2,0,2,2,2,2,2,2,2,2,1,1,2,2,0,2,2,2,2,1,2,2,1,1,2,2,2,2,2,2,2,0,2,2,2,0,0,2,2,0,2,2,2,2,2,1,2,1,1,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,0,0,2,0,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,1,0,2,0,0,1,2,1,2,2,2,2,2,0,1,1,2,2,2,2,1,2,2,1,1,1,1,2,2,1,2,2,1,1,2,2,2,2,2,2,2,2,1,0,2,2,0,0,2,1,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,0,0,2,1,2,0,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,0,0,2,1,2,1,2,2,0,2,2,2,2,2,2,1,1,2,2,1,1,0,1,2,2,2,1,2,2,2,2,0,2,2,0,2,1,1,2,2,2,2,0,1,1,2,0,0,1,2,0,2,2,1,2,2,1,0,2,2,2,1,2,0,2,2,0,2,2,0,2,2,2,0,2,1,2,2,2,2,2,2,2,1,2,0,1,2,0,1,1,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,0,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,0,2,0,2,0,2,1,2,2,1,2,2,0,2,1,2,2,2,2,2,2,2,2,2,2,1,2,1,2,0,2,1,2,2,2,2,2,2,2,1,0,0,2,1,1,1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,0,2,2,2,2,2,0,0,0,2,0,2,0,2,2,2,0,1,2,2,0,1,0,2,0,1,2,1,2,2,0,1,2,1,2,2,2,0,2,2,2,2,2,2,2,2,2,1,2,1,2,2,2,2,1,1,0,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,2,2,2,0,1,2,2,2,2,2,2,0,0,2,2,2,2,0,0,2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,0,0,2,2,2,1,1,2,2,2,2,2,2,2,2,0,2,2,1,2,2,2,2,2,2,0,2,2,1,1,2,2,2,2,2,2,2,2,2,0,2,0,0,2,2,1,0,2,2,2,2,1,2,2,1,1,1,2,0,2,2,0,2,2,1,2,1,2,2,2,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,1,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,1,1,0,2,2,2,2,2,0,0,2,2,2,2,1,0,2,1,2,1,2,2,1,1,2,1,1,2,2,2,2,2,1,2,2,2,2,0,0,0,1,2,0,2,0,0,2,2,2,2,2,2,2,2,0,2,0,0,1,0,2,2,2,0,1,2,2,1,0,2,2,1,2,1,1,2,2,2,2,2,1,1,2,2,2,0,2,2,2,1,1,2,2,2,0,1,2,2,2,1,0,2,2,1,2,0,1,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,0,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,0,1,2,2,0,1,2,2,2,0,2,2,1,2,2,2,2,1,2,1,2,1,2,0,2,2,2,1,2,0,1,1,2,2,2,2,1,2,2,2,2,1,1,0,1,2,0,2,0,1,2,2,2,2,2,2,2,0,1,2,1,1,1,1,2,2,2,1,0,2,2,1,0,2,2,0,2,2,1,2,2,2,0,1,1,0,2,2,2,1,2,0,2,2,1,2,2,0,2,1,2,2,0,2,1,2,2,2,1,2,0,2,2,2,1,2,1,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,0,2,2,2,2,2,2,2,2,2,0,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,0,2,1,2,2,2,2,2,2,1,1,2,1,0,2,2,2,2,2,0,2,2,2,2,0,1,0,2,2,1,2,0,0,2,2,2,2,2,2,0,2,2,0,1,0,1,0,2,2,2,1,0,2,1,0,0,2,2,1,2,0,1,2,2,2,0,1,0,1,2,0,0,2,2,0,2,0,1,2,2,1,0,1,2,1,2,2,0,2,2,1,1,0,0,0,2,1,0,2,0,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,1,2,2,2,2,2,2,2,2,1,0,2,2,1,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,1,0,0,2,0,2,0,2,2,2,1,2,1,0,0,2,2,2,2,0,2,2,2,2,1,1,1,1,2,0,2,1,0,2,2,2,2,2,2,2,0,0,1,2,2,2,0,2,2,2,2,0,2,1,2,1,2,2,0,2,2,1,2,2,2,1,0,0,2,2,0,0,1,2,0,2,2,1,2,2,0,2,2,2,1,0,1,0,2,2,1,0,1,1,0,2,1,2,2,1,0,2,2,2,2,2,2,1,2,1,2,2,0,1,2,1,1,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,1,0,2,2,0,0,0,2,2,2,2,2,1,2,2,2,2,1,0,0,2,2,2,2,2,2,1,0,2,1,0,2,0,2,2,2,0,2,2,2,2,0,2,2,2,2,1,2,1,1,2,2,2,2,2,2,0,0,1,2,1,1,1,2,2,2,2,2,2,2,0,0,0,2,2,0,2,0,0,2,2,2,1,1,1,1,2,2,1,2,2,2,2,1,2,2,2,2,1,0,2,2,2,1,2,2,2,2,0,0,2,2,2,1,2,2,0,0,2,2,2,2,2,2,2,2,1,0,2,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,1,1,1,2,1,2,2,2,2,2,0,2,1,0,1,1,2,2,2,1,2,2,2,2,2,2,0,2,2,2,2,0,0,2,2,2,2,2,2,1,2,2,2,1,1,1,2,2,2,2,0,2,2,1,1,0,2,2,2,2,1,1,2,2,2,1,1,2,1,2,2,0,1,2,1,2,1,0,2,2,2,1,1,2,1,0,2,2,2,2,0,2,0,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,0,2,1,1,1,1,0,2,2,2,2,2,2,2,2,2,0,2,2,2,2,1,2,0,0,2,2,1,1,0,2,2,1,2,2,2,0,2,2,2,0,2,1,2,2,2,2,2,2,1,2,2,2,0,1,2,2,2,2,0,2,2,2,2,0,2,0,0,2,2,2,0,2,2,2,2,2,2,2,1,0,1,0,2,2,0,1,2,2,2,2,0,2,1,1,0,2,2,2,2,0,2,2,2,2,0,1,1,2,2,0,0,2,2,1,2,0,0,2,2,0,1,0,2,1,0,2,0,2,2,1,1,0,1,1,2,0,2,2,0,1,2,2,2,2,2,2,0,2,0,2,2,2,0,1,0,1,2,2,2,2,2,2,2,2,0,0,2,2,0,2,0,2,1,0,2,2,0,1,1,2,2,2,2,2,0,0,2,2,2,1,0,1,2,0,2,2,2,2,1,1,2,2,0,2,2,2,2,2,1,2,2,2,2,1,2,2,1,2,2,2,2,0,2,2,2,2,2,2,0,0,0,0,1,2,0,2,2,2,2,0,1,2,1,2,0,2,2,0,2,0,1,2,2,2,1,2,0,1,2,1,2,0,2,1,2,1,0,2,2,2,2,2,2,0,2,0,0,2,2,1,2,0,1,0,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,0,2,2,1,1,0,0,2,2,2,2,2,2,2,2,2,1,2,2,1,2,0,2,1,2,2,2,2,0,1,2,2,0,2,2,1,0,2,2,2,2,1,0,2,2,2,2,2,2,0,2,2,0,0,1,2,2,2,2,2,2,2,2,2,2,1,1,0,1,1,2,1,1,2,2,2,2,2,2,1,0,1,0,2,1,2,2,2,2,2,0,2,2,2,0,2,2,2,1,2,1,0,2,2,2,0,1,0,2,2,1,1,1,2,1,2,2,2,2,2,1,2,2,2,2,0,0,0,2,2,1,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,1,0,2,2,1,2,1,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,1,2,1,2,2,2,2,2,0,1,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,2,2,1,2,0,1,0,1,2,2,2,1,2,2,2,2,0,1,2,2,0,0,2,1,2,2,2,0,2,2,2,1,2,2,2,2,2,0,2,2,2,2,1,0,2,1,1,2,2,2,1,2,1,1,2,2,2,1,1,0,0,2,2,1,2,2,1,2,0,2,2,2,0,2,1,2,0,1,0,0,2,2,2,1,0,1,1,2,0,1,2,1,2,2,2,2,2,2,0,0,2,0,0,2,1,0,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,1,0,2,2,1,0,1,2,2,0,2,2,2,2,2,2,2,1,1,1,2,1,2,2,2,2,2,0,2,1,1,2,1,2,2,2,2,2,2,2,2,1,1,2,0,0,1,2,1,2,2,2,0,2,2,2,0,0,1,2,2,1,2,0,2,2,2,0,1,2,0,0,2,2,2,1,2,2,2,2,2,2,2,0,2,0,2,0,2,1,2,2,2,0,1,2,2,0,0,0,2,2,2,2,2,2,2,0,0,1,2,1,2,2,2,2,1,0,2,2,2,2,2,1,0,2,1,1,2,0,2,1,0,1,2,2,2,2,2,2,2,2,1,1,2,2,0,2,1,2,0,1,2,2,0,1,2,2,2,0,2,2,2,2,2,2,2,0,2,0,2,1,2,0,2,2,2,2,2,1,0,0,2,2,2,1,0,2,2,2,2,2,2,1,2,0,1,2,2,0,2,2,2,2,2,2,1,1,0,1,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,1,2,0,1,2,2,2,0,0,0,1,2,1,0,0,2,2,2,2,1,2,2,2,0,0,2,0,1,1,0,2,2,2,1,2,2,2,2,2,0,2,0,0,2,2,2,2,2,2,0,2,0,0,2,0,2,0,2,2,2,2,2,2,2,2,2,0,0,1,2,2,0,2,2,2,1,2,2,2,1,0,2,2,2,1,2,2,2,1,2,2,2,0,1,2,2,1,2,2,2,2,2,2,2,1,1,0,2,2,2,2,2,2,2,2,2,0,0,2,0,1,1,2,0,2,2,2,2,2,2,2,2,0,0,2,1,2,1,1,0,2,2,2,2,2,2,1,2,2,2,0,2,1,0,2,2,2,0,2,0,2,2,0,1,0,2,0,2,2,2,2,2,0,2,1,2,0,1,1,2,2,2,0,0,1,1,1,2,1,0,2,0,1,2,2,2,2,2,0,1,2,2,2,2,2,0,1,0,2,2,2,2,2,2,2,2,1,0,2,2,2,0,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,0,1,2,2,2,1,1,2,2,0,2,0,2,2,0,0,2,2,1,1,1,2,2,1,1,2,2,2,2,0,1,2,2,2,1,2,1,0,2,2,1,2,2,2,0,0,2,1,1,2,2,1,2,2,2,1,0,2,1,2,0,2,2,1,2,0,2,2,2,2,2,2,0,2,2,1,1,1,2,1,2,0,1,2,0,0,0,0,2,2,2,1,2,2,2,1,1,0,2,2,2,2,0,2,2,1,2,2,2,2,2,1,0,2,2,1,2,2,2,1,0,0,2,2,2,2,2,2,2,0,2,0,2,2,1,2,0,2,0,2,2,2,2,0,0,2,2,0,2,2,2,2,2,2,2,1,1,1,2,1,2,0,2,2,0,2,2,0,1,0,0,2,2,1,0,2,2,2,2,0,2,2,1,0,0,2,2,1,2,2,2,2,2,2,1,1,2,2,2,0,0,0,0,2,2,1,2,2,1,1,2,2,2,0,2,0,2,2,2,2,2,1,2,0,2,2,0,1,2,0,2,2,0,2,0,0,0,0,2,1,1,2,0,2,2,2,0,0,2,0,2,0,0,2,0,0,2,2,2,2,2,0,0,2,1,0,2,1,1,2,2,2,2,2,2,2,2,2,2,0,0,1,2,2,1,2,0,2,0,0,2,2,1,2,0,2,2,2,2,2,0,2,2,2,2,1,1,0,2,2,2,1,2,2,0,0,2,0,0,1,0,2,2,0,2,2,2,2,2,2,1,1,2,0,1,2,2,0,2,2,0,2,2,2,0,2,1,0,2,2,0,0,0,2,2,0,1,2,2,2,0,2,2,0,2,0,1,2,2,2,0,2,2,2,0,0,0,0,2,1,2,1,2,2,2,2,2,0,2,1,1,1,2,2,2,1,0,1,2,1,2,1,2,2,1,2,2,2,2,2,2,1,0,2,0,2,2,2,0,2,2,1,2,2,2,2,2,2,2,0,1,0,2,2,1,2,0,2,2,0,2,2,0,1,2,2,2,2,2,2,1,1,2,2,2,1,2,0,2,2,2,2,2,2,2,1,2,2,0,0,0,2,2,1,0,2,2,2,2,0,0,1,1,0,1,1,0,1,2,2,2,2,2,2,0,2,1,1,2,1,2,1,0,2,2,0,0,2,1,2,0,2,2,1,2,1,1,2,2,2,2,2,0,0,1,0,2,2,2,0,2,0,2,2,0,2,0,0,2,2,2,2,0,2,2,0,2,2,0,1,2,2,1,2,0,1,2,2,2,2,2,0,2,2,0,0,2,2,0,1,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,0,0,2,2,1,1,1,2,2,0,2,2,2,1,2,2,2,1,2,0,2,1,2,1,2,2,2,1,2,0,1,0,1,2,2,2,0,2,2,2,2,1,2,2,2,0,2,1,1,1,2,2,2,2,2,2,2,1,2,2,2,0,2,2,1,2,2,2,2,2,0,0,2,2,2,0,2,1,1,2,2,2,1,2,0,2,1,1,1,2,2,1,2,2,0,2,2,2,1,2,2,1,1,1,1,2,2,2,2,0,1,1,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,0,2,2,0,1,0,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,1,1,2,2,1,2,0,2,2,1,2,2,1,1,2,2,2,2,2,1,2,2,2,2,2,2,0,2,2,1,2,1,2,2,2,0,2,2,2,2,2,0,2,1,2,0,1,1,1,2,2,2,0,2,2,2,2,1,0,2,0,1,2,2,0,2,2,1,1,2,2,0,1,2,2,2,2,1,0,2,2,2,0,1,0,0,2,2,0,2,2,0,2,0,1,2,0,1,1,1,2,1,2,2,1,2,2,0,0,0,1,0,2,1,2,2,1,2,2,2,2,2,2,0,0,2,2,1,2,2,0,0,1,1,0,2,2,2,2,2,2,2,2,0,2,2,2,2,1,2,0,1,2,2,1,2,0,2,2,1,2,2,0,1,0,2,2,1,1,1,2,2,2,2,2,2,1,2,2,2,1,2,1,2,2,1,0,2,2,2,2,1,1,2,0,0,0,2,2,1,2,2,2,2,2,2,1,1,1,0,0,1,0,0,2,2,2,0,1,2,2,0,2,2,2,1,2,0,0,0,2,2,1,1,1,0,2,2,1,0,2,1,2,2,0,2,0,0,2,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,1,2,0,0,2,2,2,2,2,0,0,2,2,2,2,0,2,0,0,0,2,2,2,2,2,2,2,0,1,2,2,2,1,2,0,2,2,0,1,2,0,2,2,2,2,2,2,2,0,0,2,2,2,1,2,1,2,2,2,0,2,2,0,2,2,2,2,1,0,2,0,2,1,2,2,0,2,2,1,0,0,1,0,0,2,2,2,2,1,2,2,2,0,0,1,0,0,1,1,2,1,2,2,0,1,2,0,1,2,2,2,0,2,2,0,1,2,2,2,2,2,2,1,1,2,1,2,2,2,0,0,2,2,1,0,0,2,0,1,1,2,2,2,1,0,0,0,2,2,2,0,2,0,0,2,2,2,2,2,0,1,2,2,2,2,1,0,2,0,2,2,2,2,2,2,2,2,1,0,2,2,1,2,2,2,2,1,2,2,2,0,0,2,2,2,2,2,2,2,0,0,2,2,0,0,0,2,0,2,2,2,2,0,2,2,1,2,1,1,2,1,0,2,2,2,2,2,2,0,0,0,1,1,0,1,1,2,2,1,2,2,2,1,0,2,0,0,0,2,2,1,2,2,0,2,2,1,0,2,2,2,0,2,1,1,0,2,2,0,2,2,1,0,0,1,2,2,1,2,1,1,2,1,1,1,1,2,2,1,0,2,2,2,0,2,0,2,1,2,1,0,2,0,0,2,2,2,2,2,1,2,2,2,1,2,1,1,2,1,0,0,2,2,2,2,2,2,1,0,1,2,0,1,2,0,2,1,1,1,1,1,2,0,2,2,1,2,2,2,2,1,2,2,1,1,0,2,1,2,0,2,2,2,1,2,2,2,1,2,2,1,2,2,2,2,2,2,2,0,1,1,2,2,0,0,2,2,2,1,2,2,2,2,1,2,0,2,1,1,2,1,2,2,1,1,2,1,2,0,2,2,2,2,2,2,1,2,2,2,0,1,1,0,2,2,2,2,1,2,0,0,2,1,2,0,2,2,2,0,1,0,2,2,1,1,1,0,0,2,1,1,2,1,2,2,2,2,2,0,0,1,2,0,0,2,2,2,1,0,2,2,2,2,2,2,2,2,2,0,0,2,1,1,2,1,2,1,2,0,1,0,1,0,2,2,2,2,2,1,2,0,2,2,0,0,1,2,0,2,1,2,2,0,0,2,2,2,0,0,2,2,2,2,2,2,0,2,0,2,2,0,1,0,0,0,0,2,2,1,2,2,2,1,1,2,2,0,2,0,1,1,2,2,2,0,2,0,2,2,2,2,2,2,2,0,0,2,2,1,1,2,1,2,1,2,1,2,1,2,1,2,2,2,0,0,1,2,0,1,0,0,2,2,2,1,1,0,1,2,0,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,0,2,0,2,0,0,2,2,2,2,2,2,2,2,2,2,2,0,2,1,2,0,1,2,0,0,0,1,2,2,0,2,2,0,1,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,1,1,0,2,2,1,1,2,0,1,2,2,0,2,2,0,1,1,0,1,2,2,0,2,2,2,0,2,0,1,0,0,2,1,1,2,2,2,2,2,2,0,0,2,2,1,2,2,1,2,2,2,2,2,0,0,1,2,0,2,2,0,0,2,1,2,0,2,0,2,2,0,2,0,1,2,2,1,1,2,2,0,2,2,2,2,0,0,2,2,2,2,1,0,0,2,0,0,2,0,1,2,1,2,0,2,2,2,2,2,2,0,0,0,2,0,0,2,0,2,1,0,1,1,1,1,0,2,2,2,2,2,1,2,0,2,2,0,1,1,2,0,2,1,2,2,2,0,2,1,2,0,1,2,1,2,0,2,0,1,2,2,0,0,2,0,1,2,1,2,2,2,0,2,2,2,0,1,2,2,2,2,0,0,1,2,2,0,1,2,1,0,0,2,2,1,2,1,0,0,2,2,2,1,1,0,0,1,2,1,2,1,1,1,1,2,1,0,0,0,2,1,0,0,0,2,2,1,2,0,1,0,2,2,1,2,1,2,2,2,2,2,0,0,1,2,2,0,2,2,0,0,2,0,2,2,2,2,2,2,2,0,0,1,2,0,0,2,0,2,0,1,2,1,1,0,1,2,2,1,2,2,2,0,2,2,2,1,1,0,2,0,2,2,2,2,0,1,2,2,2,2,0,2,0,1,1,2,0,1,2,1,1,1,0,2,1,0,2,0,2,2,2,2,2,2,2,0,2,0,2,2,2,0,0,2,2,0,0,2,1,0,1,2,2,1,2,0,1,1,2,2,0,2,2,2,2,1,2,1,2,1,2,1,0,2,0,0,1,1,2,2,1,1,2,2,2,0,2,2,0,2,2,1,1,2,1,1,2,2,2,2,0,1,0,2,0,0,2,0,2,2,0,2,2,1,2,2,2,2,2,0,0,2,2,1,1,2,1,2,0,1,2,2,2,1,0,2,2,0,2,2,2,0,2,2,2,1,1,0,2,2,2,0,2,2,0,0,2,1,2,0,2,2,1,1,0,2,0,1,2,0,1,2,1,0,2,2,1,2,2,2,1,2,2,2,2,1,2,0,1,2,1,1,0,2,2,2,2,2,1,1,1,2,2,1,2,1,1,2,2,2,2,2,0,0,2,1,2,0,2,0,0,2,2,2,2,1,0,0,2,2,0,1,1,2,2,2,2,2,0,1,2,2,0,2,0,1,2,2,2,2,2,2,0,2,0,2,2,2,0,1,0,2,0,1,2,2,2,2,2,1,2,2,2,0,0,2,0,2,0,1,1,1,0,0,0,2,2,2,2,2,1,2,0,2,2,1,1,1,2,0,2,1,2,2,0,1,2,0,0,2,1,2,0,0,1,2,2,2,2,1,0,2,1,0,2,1,2,0,2,2,1,2,2,2,0,1,1,0,0,2,2,0,2,2,2,1,2,2,0,2,0,2,2,0,2,2,1,1,2,2,2,0,0,0,0,0,1,1,2,0,2,1,1,2,1,2,2,1,2,2,0,1,1,2,2,0,2,2,2,2,2,1,2,2,1,1,2,2,2,2,2,0,2,2,0,1,2,0,2,2,0,2,0,2,2,2,2,2,2,0,0,1,2,2,2,2,1,2,2,1,1,0,0,2,1,2,2,2,2,0,0,0,0,2,2,1,2,0,2,0,2,2,2,2,1,1,2,1,1,2,0,2,1,2,0,2,0,1,2,0,1,0,0,2,2,2,1,0,2,2,0,2,2,2,2,1,1,2,0,2,0,0,0,2,2,1,0,2,0,0,1,2,2,0,2,0,0,1,2,2,0,0,1,2,0,2,0,2,2,1,1,2,2,2,2,1,2,0,2,0,1,2,0,2,2,0,0,0,1,0,2,2,0,2,0,1,2,2,2,2,1,2,1,2,0,1,2,1,0,0,2,2,0,1,2,2,2,2,2,0,2,2,2,2,1,2,1,2,0,2,0,2,2,1,0,2,2,2,2,1,0,2,1,2,2,0,1,0,2,2,2,0,2,2,2,0,2,1,0,0,0,2,0,0,1,2,1,1,2,2,0,1,1,2,1,1,2,1,2,2,1,2,2,2,0,2,0,2,1,0,0,1,0,2,2,2,0,2,0,0,0,2,2,1,2,2,0,1,2,0,1,1,1,0,1,0,1,1,2,1,1,1,2,2,1,1,2,0,2,2,2,0,2,2,0,1,2,2,1,1,2,2,1,2,1,0,2,2,2,2,2,1,0,2,1,1,2,1,0,1,2,1,1,2,2,2,2,2,2,1,1,1,2,2,2,2,0,2,0,0,1,0,1,0,1,2,2,2,2,1,2,1,0,2,2,1,1,1,2,0,2,0,2,2,2,1,2,1,0,1,0,2,0,2,1,2,1,1,2,0,1,1,2,2,2,2,2,1,2,2,0,2,2,2,1,2,0,0,1,0,1,1,0,2,2,2,0,2,1,1,2,2,2,1,2,1,2,0,2,0,2,1,1,2,1,1,1,1,2,1,2,2,1,2,2,2,1,2,2,1,1,1,0,2,2,1,1,1,0,2,2,2,2,2,2,1,2,2,2,2,2,2,0,2,0,0,2,0,2,2,2,2,2,1,1,2,2,2,2,1,2,0,2,0,1,2,1,2,0,2,1,2,1,0,1,0,2,2,2,2,2,2,0,2,2,2,0,1,2,1,2,1,2,2,2,2,2,1,0,1,1,2,0,0,2,2,1,2,2,1,0,2,2,1,2,2,2,1,2,2,0,2,2,2,2,2,1,0,1,0,1,1,0,2,2,2,1,0,1,2,2,2,2,1,2,2,0,2,2,0,1,0,0,1,1,1,0,2,2,0,1,2,1,2,0,1,1,0,2,0,2,2,2,2,1,2,0,0,2,2,2,1,1,2,1,1,2,2,2,2,2,1,2,2,2,1,2,2,0,1,2,0,2,1,0,2,2,2,2,2,1,0,2,2,2,2,0,2,2,1,1,0,1,1,0,2,2,1,2,2,2,2,1,2,2,2,2,0,2,2,2,1,2,2,1,2,2,0,2,0,2,2,1,2,1,2,2,1,2,2,2,2,0,2,1,1,1,0,2,2,1,2,2,2,1,1,0,0,1,2,1,2,0,2,2,1,2,1,0,2,0,2,2,0,2,1,1,1,1,0,2,1,0,0,1,2,1,1,2,0,0,1,2,2,2,0,0,1,2,2,1,2,0,2,2,2,2,0,1,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,0,2,2,0,2,2,2,2,2,2,2,1,0,1,2,1,1,2,1,2,1,0,1,0,1,1,1,0,2,2,2,1,2,1,0,2,2,1,0,2,2,2,2,2,2,2,0,2,2,0,2,2,1,2,0,2,1,2,0,1,2,0,1,1,1,2,2,0,1,2,2,2,0,2,2,2,0,0,2,1,0,1,0,2,2,2,2,1,2,1,0,1,0,2,2,0,2,0,2,0,0,1,2,2,0,1,0,2,0,1,2,2,1,0,0,2,2,1,1,2,2,0,0,1,1,2,2,0,2,0,2,1,2,1,0,2,1,2,2,2,2,2,1,0,0,2,2,0,2,1,1,1,2,0,0,0,1,2,2,2,2,2,0,0,2,2,1,2,2,2,0,2,0,0,2,2,1,0,2,0,2,1,0,2,1,2,2,0,2,2,2,0,2,1,2,2,1,2,2,0,0,0,0,2,0,1,2,2,0,1,2,2,2,2,2,1,2,0,2,2,0,2,0,2,2,2,1,0,0,0,1,0,0,1,0,2,2,2,2,1,0,1,2,2,2,2,2,1,1,1,1,2,2,1,1,1,0,1,0,1,2,1,0,2,1,2,0,0,1,1,2,2,1,2,1,2,1,0,2,0,0,1,2,1,0,2,0,1,2,2,2,2,1,2,0,2,1,0,2,0,0,2,1,1,0,0,1,2,2,2,2,1,0,1,2,2,0,2,1,2,1,2,2,2,2,1,0,0,2,1,2,0,2,1,0,2,2,2,1,2,2,2,2,2,2,2,1,2,2,0,1,0,1,2,2,1,1,2,2,1,2,1,0,2,0,0,2,0,1,0,0,2,1,2,0,2,0,1,0,0,0,0,2,2,0,2,2,2,0,2,1,1,0,2,2,2,2,1,1,0,0,1,2,1,2,0,2,2,0,0,2,0,2,0,1,2,2,0,1,0,2,2,1,0,0,2,2,1,2,1,1,2,2,2,0,2,2,1,2,2,2,2,0,2,2,2,0,1,2,1,0,1,2,2,1,0,1,2,2,2,2,2,2,2,2,1,0,2,1,2,1,2,1,2,2,1,2,0,2,2,2,2,0,0,1,2,2,2,2,0,2,0,0,0,2,2,2,0,2,0,2,1,2,2,0,1,2,2,1,2,2,0,2,1,0,0,2,0,1,2,1,2,1,2,1,2,2,2,0,1,0,2,1,2,2,2,2,1,0,2,1,1,1,2,2,2,2,1,2,1,1,0,0,1,0,2,2,2,1,0,2,2,2,2,1,2,2,1,1,0,2,2,2,0,1,2,2,0,1,2,1,1,2,2,2,2,1,0,2,2,2,2,1,2,0,2,2,1,2,0,2,0,1,2,2,1,1,2,2,2,2,0,2,2,2,2,1,2,1,2,1,1,0,2,1,2,1,1,2,1,2,1,0,2,1,2,2,0,2,0,2,1,1,2,2,2,2,2,2,2,1,1,2,2,1,1,0,2,2,2,2,0,0,1,0,0,2,0,1,1,1,2,2,2,0,2,1,0,1,2,1,0,2,0,1,2,2,2,2,1,0,0,2,2,2,1,2,0,0,1,1,1,0,1,1,1,1,2,2,0,2,0,1,1,2,2,1,1,1,1,2,0,0,1,0,2,0,0,1,0,2,0,2,0,0,2,0,0,2,2,2,2,0,2,2,2,1,2,2,1,1,1,1,2,0,2,0,2,2,2,2,1,2,2,2,0,2,2,1,2,0,0,1,0,2,2,1,1,2,0,2,1,0,0,1,2,2,0,0,0,2,2,2,2,2,2,2,0,2,1,0,1,1,2,1,2,2,2,2,2,2,2,1,1,1,2,1,0,0,0,1,0,1,2,2,2,0,0,0,1,2,0,2,0,2,2,2,0,0,2,0,1,0,2,2,2,2,0,1,1,2,2,2,1,2,2,0,0,1,0,2,1,0,2,2,2,0,2,2,2,2,1,2,1,1,2,1,0,0,0,0,2,2,1,0,2,2,2,2,2,2,2,0,1,2,2,0,0,2,0,1,0,2,1,0,1,1,2,1,2,2,0,0,2,2,0,2,2,2,2,1,0,1,1,2,2,2,2,2,2,2,2,0,0,1,2,2,1,1,1,2,1,0,1,2,2,1,1,2,2,2,2,1,2,1,1,2,2,2,2,2,2,0,2,2,0,0,1,0,2,0,2,2,2,0,2,0,1,0,0,1,1,0,1,2,2,2,2,1,1,1,2,0,2,2,0,2,0,1,2,2,2,0,2,1,0,1,1,1,2,2,2,1,2,0,2,1,0,0,0,2,0,0,2,0,2,1,0,0,2,1,1,2,1,1,2,2,1,2,2,2,2,1,0,2,2,0,2,2,0,2,2,2,1,1,0,2,1,0,2,2,2,2,2,2,2,0,2,1,2,0,2,1,0,0,1,0,2,2,1,2,2,1,2,1,2,2,2,1,1,2,2,0,2,2,2,0,2,2,1,1,2,1,2,2,1,2,2,1,0,2,1,0,1,0,2,1,2,0,0,0,0,2,2,2,2,2,0,1,0,2,1,2,2,2,2,2,0,0,1,2,2,2,2,2,0,2,0,1,2,2,0,2,1,1,1,2,1,1,1,2,1,2,1,1,2,1,0,1,1,2,1,0,0,2,2,2,1,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0,2,2,2,0,2,2,1,1,2,1,2,1,0,0,1,1,2,2,0,0,2,2,0,1,0,2,2,1,0,1,1,2,0,0,0,2,1,2,1,0,0,0,2,2,2,0,0,2,0,0,0,2,2,1,1,2,1,2,2,1,2,2,1,0,2,0,2,2,2,1,0,1,1,0,1,1,1,1,2,2,2,1,2,2,1,0,0,1,1,1,0,1,2,2,0,1,2,2,0,0,2,2,0,2,2,0,0,2,2,2,2,0,0,0,1,2,0,2,2,1,0,1,2,1,1,2,1,2,0,0,0,1,2,0,2,2,2,0,0,2,1,0,2,1,0,2,2,2,2,2,0,1,2,0,2,2,2,2,2,0,2,1,2,2,1,0,2,2,1,0,0,2,0,1,2,2,2,0,1,2,2,1,0,1,2,2,0,2,1,2,0,2,2,2,1,2,2,2,2,0,0,2,2,0,1,2,0,1,2,1,2,2,2,0,2,0,1,2,2,1,1,2,2,2,0,2,2,2,0,2,2,2,2,1,2,2,1,2,2,1,0,0,2,2,1,1,1,2,1,2,2,2,1,2,0,1,0,0,0,1,0,0,0,1,0,1,0,2,1,2,0,2,2,1,0,1,2,2,1,2,0,2,2,1,1,0,1,0,2,2,1,1,2,0,0,2,2,2,2,0,1,1,2,1,0,2,1,0,1,0,0,1,2,1,0,1,2,1,0,2,0,2,2,2,2,2,2,1,1,1,1,0,0,1,2,2,2,2,1,1,0,2,2,2,0,0,2,2,2,0,0,2,2,0,2,2,1,0,1,1,2,1,1,2,2,2,0,2,0,0,2,0,0,2,0,0,2,2,1,2,2,2,2,2,2,2,0,0,0,2,0,0,2,2,1,1,1,1,1,0,2,2,0,2,2,0,2,0,1,2,2,2,2,2,0,2,1,2,2,1,0,2,2,0,0,1,0,2,2,0,1,2,2,2,2,0,1,2,2,2,0,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,0,1,1,2,0,1,2,2,2,2,0,2,0,0,2,0,1,1,0,2,1,1,2,0,0,0,2,2,2,2,2,1,0,0,0,2,2,0,1,0,2,2,0,0,2,2,1,0,2,0,2,2,1,2,2,1,2,2,0,0,2,2,1,0,2,0,2,0,1,1,2,1,2,2,1,2,1,1,2,0,2,1,1,0,1,2,2,0,0,0,2,0,2,2,2,0,2,2,1,1,0,0,1,1,0,1,1,0,1,2,2,2,2,2,2,2,1,0,1,0,2,2,0,2,2,2,0,0,2,2,0,1,2,2,0,2,0,1,2,2,2,2,0,1,1,2,2,2,2,2,0,1,2,1,1,1,0,2,1,2,1,2,1,1,2,0,2,2,1,2,0,2,1,1,2,1,0,0,1,2,2,2,2,0,2,2,0,0,1,1,2,2,0,1,2,2,2,1,2,0,1,1,1,2,2,2,0,2,1,2,2,1,2,2,0,0,0,0,1,2,2,0,0,2,0,2,0,0,1,0,1,1,0,2,0,2,2,0,1,0,0,1,2,2,2,0,2,1,2,2,2,0,0,2,0,0,2,2,0,0,2,2,2,0,0,2,1,2,2,2,1,2,1,1,0,2,1,0,0,0,2,1,2,0,1,1,2,2,2,2,2,2,0,1,0,2,2,0,2,0,1,1,1,2,2,1,1,0,1,0,0,1,2,0,2,1,0,2,2,2,0,2,0,1,2,0,0,0,1,1,2,1,2,1,2,2,2,1,2,0,2,0,2,0,2,2,1,2,2,2,0,0,1,2,1,0,1,2,0,1,2,2,2,0,2,2,1,2,1,0,0,2,2,2,0,2,1,1,1,1,2,0,1,0,1,2,2,1,2,0,2,2,0,2,2,0,2,2,2,0,1,0,1,1,2,2,1,2,2,2,2,1,2,0,2,2,1,1,0,2,2,0,2,2,0,2,2,2,1,2,2,0,2,0,2,0,1,2,2,2,2,2,0,1,2,2,2,0,2,1,0,1,1,2,0,2,2,0,1,1,2,1,0,1,2,2,0,0,2,0,1,1,2,1,0,0,1,0,0,1,2,0,2,1,1,2,0,1,2,0,2,1,2,0,2,0,1,1,2,2,2,1,2,2,2,2,1,2,0,1,2,1,1,0,0,1,0,0,1,0,2,0,1,2,2,2,2,1,1,0,0,1,2,0,1,2,2,1,0,2,0,1,2,2,2,2,2,0,2,2,1,0,0,0,0,2,2,0,2,2,2,2,2,1,2,2,0,1,2,1,1,1,0,0,2,2,0,2,1,0,2,0,2,0,0,2,0,2,2,2,2,2,2,1,0,2,2,0,2,1,0,2,0,0,2,0,1,1,2,0,0,1,0,2,2,1,0,2,1,2,2,0,2,1,2,2,2,1,2,0,1,2,1,1,0,2,0,0,1,0,2,1,0,2,2,2,0,2,2,1,0,1,2,2,0,2,2,2,2,1,2,0,0,0,2,1,0,0,2,0,1,2,2,2,1,2,2,0,2,1,1,1,2,2,0,2,2,1,0,1,2,2,2,2,2,0,2,1,2,0,1,2,0,1,2,2,1,1,1,1,2,1,0,1,2,2,2,0,0,0,2,0,0,0,1,2,0,0,2,2,2,1,2,0,0,1,2,0,2,2,2,2,1,2,0,2,2,2,2,0,2,1,1,0,1,0,2,0,1,0,1,0,2,0,0,0,1,2,0,0,1,1,2,2,0,2,2,1,2,1,1,2,1,1,2,1,1,0,2,0,1,1,0,0,0,2,0,1,1,1,2,2,1,1,2,1,0,0,1,2,1,2,0,2,1,1,2,2,1,2,2,1,2,1,0,1,1,1,2,1,2,2,0,1,0,1,0,1,2,0,0,0,1,1,0,2,0,0,2,2,0,2,2,0,1,1,0,0,1,1,1,2,1,0,1,1,0,1,1,1,1,0,2,0,2,1,2,0,0,1,2,1,0,2,1,1,1,2,0,0,1,0,0,0,2,0,2,0,0,2,0,1,0,1,0,0,0,1,1,0,];
const properties = [];
const layers = [];

const generateImage = data => {  
  let indexPixels = 0;
  while (indexPixels < data.length) {
    let layer = [];
    let layerProperties = {
      0: 0,
      1: 0,
      2: 0
    };
    for (let y = 0; y < 6; y++) {
      layer[y] = [];
      for (let x = 0; x < 25; x++) {
        layer[y][x] = data[indexPixels];
        if (layer[y][x] >= 0 && layer[y][x] <= 2) {
          layerProperties[layer[y][x]]++;
        }
        indexPixels++;
      }
    }
    layers.push(layer);
    properties.push(layerProperties);
  }
}

const generateResult = () => {
  let finalImage = [];
  for (let y = 0; y < 6; y++) {      
    finalImage[y] = [];
    for (let x = 0; x < 25; x++) {
      finalImage[y][x] = 2;
    }
  }
  layers.forEach(layer => {
    for (let y = 0; y < layer.length; y++) {      
      for (let x = 0; x < layer[y].length; x++) {
        finalImage[y][x] = finalImage[y][x] === 2 ? layer[y][x] : finalImage[y][x];        
      }
    }
  });
  return finalImage;
}

const getResultHTML = image => {
  let result = '<table>';
  for (let y = 0; y < image.length; y++) {
    result = `${result}<tr>`;
    for (let x = 0; x < image[y].length; x++) {
      result = `${result}<td bgcolor=${image[y][x] === 0 ? 'BLACK' : image[y][x] === 1 ? 'GRAY' : 'WHITE'}>&nbsp;&nbsp;&nbsp;</td>`;
    }
    result = `${result}</tr>`;
  }
  result = `${result}</table>`;
  return result;
}

generateImage(input);
console.log(getResultHTML(generateResult()));