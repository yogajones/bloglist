const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

const testBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

describe("total likes", () => {
  test("of empty list is zero", () => {
    assert.strictEqual(listHelper.totalLikes([]), 0);
  });
  test("of one blog equals its likes", () => {
    assert.strictEqual(
      listHelper.totalLikes([testBlogs[0]]),
      testBlogs[0].likes,
    );
  });
  test("of three blogs equals the sum of likes", () => {
    assert.strictEqual(listHelper.totalLikes(testBlogs), 36);
  });
});

describe("favorite blog", () => {
  test("of an empty list is an error message", () => {
    assert.strictEqual(listHelper.favoriteBlog([]), "No favorite!");
  });
  test("of a list with one blog is that blog", () => {
    assert.strictEqual(listHelper.favoriteBlog([testBlogs[0]]), testBlogs[0]);
  });
  test("of a list of blogs is the one with the most likes", () => {
    assert.strictEqual(listHelper.favoriteBlog(testBlogs), testBlogs[2]);
  });
});

describe("author with most blogs", () => {
  test("is Robert C. Martin with three blogs", () => {
    assert.deepStrictEqual(listHelper.mostBlogs(testBlogs), {
      author: "Robert C. Martin",
      blogs: 3,
    });
  });
});

describe("author with the most likes", () => {
  test("is Dijkstra with 17 likes", () => {
    assert.deepStrictEqual(listHelper.mostLikes(testBlogs), {
      author: "Edsger W. Dijkstra",
      likes: 17,
    });
  });
});
