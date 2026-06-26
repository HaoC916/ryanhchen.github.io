type TagsProps = {
  tags: string[]
}

function Tags({ tags }: TagsProps) {
  return (
    <div className="project-tags">
      {tags.map((tag) => (
        <span className="project-tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
