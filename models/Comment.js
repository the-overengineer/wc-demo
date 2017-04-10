class Comment {
  constructor(author, text) {
    this.author = author;
    this.text = text;
    this.timestamp = new Date();
  }

  get createdAt() {
    return this.timestamp.toString();
  }
}
