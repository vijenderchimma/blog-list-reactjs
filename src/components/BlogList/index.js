// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <ul className="blog-list-container">
        {blogsList.map(eachBlogItem => (
          <BlogItem blogItem={eachBlogItem} key={eachBlogItem.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
