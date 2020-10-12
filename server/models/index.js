// 몽구스는 model의 첫 번째 인자로 컬렉션 이름을 만듭니다.
// User이면 소문자화 후 복수형으로 바꿔서 users 컬렉션이 됩니다.
// Book 스키마였다면 books 컬렉션이 됩니다.
module.exports = {
  User: require("./User"),
};
