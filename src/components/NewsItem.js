import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title,description,imageurl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageurl?"https://www.livemint.com/lm-img/img/2023/08/07/600x338/smart_tv_1691386968377_1691386977183.jpg":imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem