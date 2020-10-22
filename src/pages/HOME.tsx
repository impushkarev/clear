// CUR COMPONENT
import React from 'react'

// COMPONENTS
import Container from 'components/Grid/Container'
import Wrapper from 'components/Grid/Wrapper'
import Col from 'components/Grid/Col'



const HOME:React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Col xs={12} md={8}>
          <div className="m-theme">
            <div>
              <h1>Home</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, pariatur? Dolor, maxime nostrum? Minus fugiat deleniti, quae enim nemo quis aliquam sunt, debitis obcaecati totam voluptatibus incidunt soluta atque vero?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem deleniti sequi iste velit, doloremque quam quis, totam illo sunt veritatis laudantium mollitia ab. Commodi voluptatibus fugit blanditiis deserunt consectetur impedit?In officia aspernatur laudantium voluptatem dolorum exercitationem, explicabo fugit doloremque voluptates accusantium consectetur ullam rem odit soluta odio vel aliquid voluptatum modi, suscipit, sequi vitae amet! Consectetur eligendi debitis voluptate.</p>
            </div>
            <div>
              <h2>Home</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod placeat ullam officiis suscipit excepturi nisi hic voluptas dolore obcaecati doloribus quibusdam dignissimos nihil sequi vero expedita illum, saepe deleniti magni?</p>
              <div className="img">
                <img src="https://miro.medium.com/max/10368/1*an7X6yxD1YrMQVTaIg3uWw.jpeg" />
              </div>
              <div className="img">
                <img src="https://miro.medium.com/max/10368/1*an7X6yxD1YrMQVTaIg3uWw.jpeg" />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="m-theme">
            <div>
              <h1>Home</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam quo est fugit fugiat corrupti quis laborum consectetur earum dolor, dolore, neque, quaerat eius repudiandae deleniti harum blanditiis quia adipisci!</p>
            </div>
            <div>
              <h4>Home</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni cumque voluptas voluptatibus! Pariatur mollitia, facilis aperiam quis sunt natus? Dolorum beatae nobis, repudiandae at quam esse officiis laboriosam odio.</p>
            </div>
          </div>
          <div className="m-theme">
            <div>
              <h5>Home</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae vitae eligendi provident dicta suscipit tempora porro mollitia a soluta ipsam corporis natus repudiandae assumenda, commodi nam maxime deserunt esse?</p>
            </div>
            <div>
              <h6>Текст с списком</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis necessitatibus corrupti ipsa assumenda laudantium unde numquam eligendi deleniti exercitationem fugiat fuga quo ut veniam molestiae tempora, perferendis repudiandae itaque.</p>
              <ul>
                <li>Сходить на работу</li>
                <li>Помыть посуду</li>
                <li>
                  <span className="li">Список покупок</span>
                  <ul>
                    <li>Морковь</li>
                    <li>Хлеб</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="m-theme">
            <div>
              <h6>Текст с сылками</h6>
              <p>Lorem, <a href="">link</a> <a href="">focus</a> <a href="">visited</a> dolor sit amet consectetur adipisicing elit. Natus error consectetur atque neque, quas tenetur repellat quaerat in dolores architecto, et nobis praesentium maxime temporibus rem aliquam fuga aperiam! Quod.</p>
            </div>
          </div>
        </Col>
      </Wrapper>
    </Container>
  )
}

export default HOME