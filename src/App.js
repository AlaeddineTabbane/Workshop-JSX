import './App.css';

function App() {

  // les valeur de chaque video
  const imgURL = "https://i.ytimg.com/vi/hMWoOunsMFM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFXPwvOvUP400pq93ZbF_3IyTR1A"
  const title = "Nordo ft. Blingos - Layem (Clip Officiel) | الأيام"
  const name = "Marwen nordo"
  const view = "13M"
  const date = "1 month"

  // liste des data de la database
  const data = [
    { imgURL, title, name, view, date },
    { imgURL, title, name, view, date },
    { imgURL, title, name, view, date },
    { imgURL, title, name, view, date },
    { imgURL, title, name, view, date },
  ]

  // element JSX pour un video
  const video =
    <div className='d-flex'>
      <div style={{ height: 94, width: 168, marginRight: 8 }}>
        <img src={imgURL} alt='Nordo' width='100%' />
      </div>
      <div>
        <h3 style={{ fontSize: 14 }}>{title} </h3>
        <p>{name} </p>
        <p>{view} view  {date} ago</p>
      </div>
    </div>

  // creé une liste par des videos
  const list = [video, video, video]
  list.push(video)

  // creé une liste a partire les data
  const list1 = data.map((element, index) =>
    <div className='d-flex' key={index}>
      <div style={{ height: 94, width: 168, marginRight: 8 }}>
        <img src={element.imgURL} alt='Nordo' width='100%' />
      </div>
      <div>
        <h3 style={{ fontSize: 14 }}>{element.title} </h3>
        <p>{element.name} </p>
        <p>{element.view} view  {element.date} ago</p>
      </div>
    </div>
  )



  /**
   * appel database
   * return data
   * list.push(data)
   */

  return (
    <div className='container-fluid' style={{ border: '4px solid' }}>
      <div className='row' style={{ border: '4px solid blue', height: "100%" }}>
        <div className='col-8' style={{ border: '4px solid red', height: "100%" }}>
          <iframe width="100%" height="300"
            src="https://www.youtube.com/embed/sM5LtcfazvM"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div>
            <p>Mortadha Ftiti ft. Sanfara - Cheda W Tzoul [Music Video] (2021) / مرتضى فتيتي وسنفرة - شدّة وتزول</p>
            <p>6,333,933 views Premiered Jun 3, 2021</p>
          </div>
        </div>
        <div className='col-4' style={{ border: '4px solid red', }}>
          <div className='d-flex justify-content-between mb-3'>
            <span>Up next</span>
            <span>AUTOPLAY</span>
          </div>
          {/* integrer les liste1 */}
          {list1.map(video => video)}
          
          {/* integrer les data html a partire les data */}
          {data.map((element, index) => (
            <div className='d-flex' key={index}>
              <div style={{ height: 94, width: 168, marginRight: 8 }}>
                <img src={element.imgURL} alt='Nordo' width='100%' />
              </div>
              <div>
                <h3 style={{ fontSize: 14 }}>{element.title} </h3>
                <p>{element.name} </p>
                <p>{element.view} view  {element.date} ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
