var data = [{ start: 2, end: 3 }, { start: 1, end: 3 }, { start: 3, end: 7 }, { start: 1, end: 10 }] //no overlap
//var data = [{ start: 2, end: 3 }, { start: 7, end: 10 }, { start: 5, end: 6 }] //yes overlap
result = data
    .sort((a, b) => { return a.start - b.start || a.end - b.end; });
arr2 = [...result];
result.forEach((r, a) => {
    if (a + 1 < arr2.length && r.end >= arr2[a + 1].start) {
        console.log(`overlap at ${a}`);
    }
});

