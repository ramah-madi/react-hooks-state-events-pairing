function VideoInfo({ data }) {
  return (
    <div className="videoInfo">
        <iframe
        width="919"
        height="525"
        src={data.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{data.title}</h1>
      <p>{data.views} Views | Uploaded {data.createdAt}</p>
    </div>
  )
}

export default VideoInfo;