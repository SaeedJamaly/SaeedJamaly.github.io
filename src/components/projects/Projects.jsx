import React from 'react'
import './projects.css'
import NLP from '../../assets/nlp.JPG'
import Java from '../../assets/Java.png'
import ML from '../../assets/ml.png'
import Elastic from '../../assets/elastic.png'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Selected Projects</h2>
      <div className="container proj__container">

        <div className="proj__card">
          <h4>Machine Learning</h4>
          <div className="proj">
            <div className="proj__img">
              <img src={ML} alt="csoon_proj" />
            </div>
            <div className="proj__list">
              <h3>Fraud detection in Credit Card transactions using binary classification</h3>
              <h5>Comparison of SVM, Complement Naive-Bayes, LR, GMM classifiers</h5>
              <h5>Accuracy analysis using confusion-matrix, AUPRC and AUROC</h5>
              <h5>Analysisng the effect of imabalance ratio in the dataset</h5>
              <h5>Language: Python Library: Scikit-learn</h5>
              <a href="https://github.com/SaeedJamaly/Credit_Card_fraud_detection.git">Please visit my Github repository</a>
            </div>
          </div>
        </div>

        <div className="proj__card">
          <h4>Design Patterns</h4>
          <div className="proj">
            <div className="proj__img">
              <img src={Java} alt="csoon_proj" />
            </div>
            <div className="proj__list">
              <h3>Java and JavaFX project</h3>
              <h5>Language: Java</h5>
              <h5>Rental management system design using MVC model</h5>
              <h5>In this project we tried to use different design patterns</h5>
              <h5>and OOP concepts in our design. The user interface we used JavaFX.</h5>
              <a href="https://github.com/SaeedJamaly/Java-and-JavaFX.git">Please visit my Github repository</a>
            </div>
          </div>
        </div>

        <div className="proj__card">
          <h4>Distributed Systems</h4>
          <div className="proj">

            <div className="proj__img">
              <img src={Elastic} alt="csoon_proj" />
            </div>
            <div className="proj__list">
              <h3>Distributed search engine implementation using ES and K8s</h3>
              <h5>Language: Java</h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <a href="https://github.com/SaeedJamaly/ElasticSearch_and_Kubernetes_Implementation.git">Please visit my Github repository</a>
            </div>
          </div>
        </div>


        <div className="proj__card">
          <h4>Natural Language Processing</h4>
          <div className="proj">
            <div className="proj__img">
              <img src={NLP} alt="nlp_proj" />
            </div>
            <div className="proj__list">
              <h3>Sentiment analysis of sentences with featured grammar</h3>
              <h5>Language: Python Library: NLTK</h5>
              <h5>Analyze sentence sentiment and sentiment bearing named entities </h5>
              <h5>Using feature-based Earley's chart parser as the algorithm</h5>
              <h5>Designed grammar to cover sentences with complex and compound structure</h5>
              <a href="https://github.com/SaeedJamaly/sentiment_analysis_assignment.git">Please visit my Github repository</a>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Projects