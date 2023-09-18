function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">오늘의 하루</div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">패스트캠퍼스</div>
          <div className="post__date">2023.09.17 일요일</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">수정</div>
        </div>
        <div className="post__text">게시글 내용</div>
      </div>
    </div>
  );
}

export default PostDetail;