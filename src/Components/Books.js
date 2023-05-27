import React from 'react'

function Books() {
    return (
        <div><h1>Books</h1>
            Emotional (EQ) assessments are an important learning platform in most
                countries. This is an effort by Mr. Vasant Agarwal, one of India's
                renowned experts to bring this important evaluation and guidance
                program to India.
            <div className="d-flex justify-content-center">
                <div className="card mx-3" style={{ width: '20rem', borderRadius: '15px', border: '1px solid grey', background: 'black', color: 'white' }}>
                    <img
                        src="https://www.mjvinnovation.com/wp-content/uploads/2021/07/Etapas-do-Data-Science-para-aplicar-na-sua-empresa.gif"
                        className="card-img-top"
                        alt="..."
                        style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Big Data Analytics and its Application in real world</h5>
                        <p className="card-text">
                            The Data Science Club is organizing a summit focused on Big Data Analytics and its real-world applications. The summit aims to bring together experts in the field to discuss the latest trends, techniques, and challenges in big data analytics and explore its potential for solving real-world problems..
                        </p><br />
                        <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
                    </div>
                </div>

                <div className="card mx-3" style={{ width: '20rem', borderRadius: '15px', border: '1px solid grey', background: 'black', color: 'white' }}>
                    <img
                        src="https://www.cloudyml.com/wp-content/uploads/2022/06/Insurance-Leadspace-Aniamted.gif"
                        className="card-img-top"
                        alt="..."
                        style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Intro into Graph Data Science</h5>
                        <p className="card-text">
                            The Data Science Club is conducting a guest talk on an Introduction to Graph Data Science, covering the fundamentals, real-world applications, and exciting possibilities of the field.The guest speaker will discuss the real-world applications of graph data science, such as social network analysis, recommendation systems, and fraud detection.
                        </p>
                        <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
                    </div>
                </div>

                <div className="card mx-3" style={{ width: '20rem', borderRadius: '15px', border: '1px solid grey', background: 'black', color: 'white' }}>
                    <img
                        src="https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif"
                        className="card-img-top"
                        alt="..."
                        style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Application of Data Science in Machine Learning</h5>
                        <p className="card-text">The Data Science Club is organizing a hackathon where participants will use their data science skills to develop machine learning solutions for real-world problems, providing a platform for learning, collaboration, and innovation in the field.</p><br /><br />
                        <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
                    </div>
                </div>
                <div className="card mx-3" style={{ width: '20rem', borderRadius: '15px', border: '1px solid grey', background: 'black', color: 'white' }}>
                    <img
                        src="https://www.cloudyml.com/wp-content/uploads/2022/06/1ca74946ed770bb635e4de4711bd861f.gif"
                        className="card-img-top"
                        alt="..."
                        style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Future of Data Science Data Science</h5>
                        <p className="card-text">The Data Science Club is hosting a discussion on the Future of Data Science to explore emerging trends and technologies, discussing their potential impact on industry and society, providing insights into the future of data science and its role in shaping the world.</p><br />
                        <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
                    </div>
                </div>

            </div>
            <br />
        </div>
    )
}

export default Books