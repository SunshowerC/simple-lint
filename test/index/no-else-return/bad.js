// bad 多余的else && else if 的用法不被允许
function foo() {
    if (x) {
        return y;
    } else {
        return z;
    }
}
// or
function foo() {
    if (error) {
        return 'It failed';
    } else if (loading) {
        return "It's still loading";
    }
}
