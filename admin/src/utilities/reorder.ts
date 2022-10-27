const reorder = <T>(list: T[], startIndex: number, endIndex: number): T[] => {
    const res = Array.from(list);
    const [removed] = res.splice(startIndex, 1);
    res.splice(endIndex, 0, removed);

    return res;
}

export default reorder;