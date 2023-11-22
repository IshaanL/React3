import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source":{"id":"news-com-au","name":"News.com.au"},
            "author":null,
            "title":"Australia announces new cricket captain",
            "description":"Mitch Marsh was the hero in Australia&rsquo;s T20 World Cup win in 2021 and his value to the team has been confirmed after being named captain for a three-match series in South Africa which will feature a host of new faces.",
            "url":"https://www.news.com.au/sport/cricket/mitchell-marsh-named-new-australian-t20-captain/news-story/a2da50dc946a4e9dfa4b9a852472ca57",
            "urlToImage":"https://content.api.news/v3/images/bin/ad930c339f3df71868fe20d0512c996e",
            "publishedAt":"2023-08-07T03:21:00Z",
            "content":"Mitch Marsh was the hero in Australia’s T20 World Cup win in 2021 and his value to the team has been confirmed after being named captain for a three-match series in South Africa which will feature a … [+3552 chars]"},
        {
            "source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,
            "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt":"2020-04-27T11:41:47Z",
            "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},
        {
            "source":{"id":"espn-cric-info","name":"ESPN Cric Info"},
            "author":null,
            "title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z",
            "content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}]
    constructor(){
        super();
        console.log("news");
        this.state={
            articles: this.articles,
            loading:false
            
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=566325ce58b4461bbb671718e4582a1b"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles})
        }

  render() {
    return (
      <div className='container my-3'>
        <h2>NEWS - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url}/>
            </div>
             })}
        </div>
        
        
      </div>

    )
  }
}

export default News