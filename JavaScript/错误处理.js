try {
    console.log("调用不存在的f()");
    f();
} catch (error) {
    console.log("捕捉到错误！");
    console.log(error.message);
}