let arr = [1, 15, 4],
    i = arr.sort(compareNmu);

    function compareNmu(a,b) {
        return a-b;
    }

    console.log(arr);
    console.log(i);