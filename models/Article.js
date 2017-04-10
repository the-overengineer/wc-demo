class Article {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  static parse(articleJSON) {
    const title = articleJSON.title;
    const text = articleJSON.text;
    const comments = articleJSON.comments.map((comment) => new Comment(
      comment.author,
      comment.text
    ));

    const article = new Article(title, text);

    comments.forEach((comment) => {
      article.addComment(comment);
    })

    return article;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}
