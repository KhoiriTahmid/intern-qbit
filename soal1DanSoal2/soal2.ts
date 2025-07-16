type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// jawaban

// cara biasa
// pake recursion, setiap ketemu obj comment akan increment var count
// dan kalo di obj itu "replies" gak kosong maka panggil fungsi itu lagi
function countComments(comment: IComment[]) {
  let count = 0;
  comment.forEach((e) => {
    count++;
    if (e.replies) count += countComments(e.replies);
  });
  return count;
}
console.log("jumlah komantar: " + countComments(comments));

// cara cepat
// ubah jadi string lalu split dangan pemisah "commentId" dan hitung length arr yg dihasilkan lalu dikurang 1
const countComments2 = (comments: IComment[]) =>
  JSON.stringify(comments).split("commentId").length - 1;
console.log("jumlah komantar: " + countComments2(comments));
