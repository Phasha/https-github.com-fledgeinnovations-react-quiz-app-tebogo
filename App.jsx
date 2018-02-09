import React from 'react';
import BoxScore from './BoxScore.jsx';
import QuestionList from './QuestionList.jsx';
import Results from './Results.jsx';


class App extends React.Component {
 
constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
	        text: 'Which of these is Doms(Vin diesel) favorite beverage?',
	        choices: [{
	          id: 'a',
	          text: 'Heineken'
	        }, {
	          id: 'b',
	          text: 'Corona'
	        }, {
	          id: 'c',
	          text: 'Single Molt Scotch'
			  }, {
			     id: 'd',
				 text: 'Carlsberg'
			  
	        }],
	        correct: 'b'
	      }, 
		  
		  
	   {
          id: 2,
	        text: 'What was Paul Walkers First name in Fast and the Furious?',
	        choices: [{
	          id: 'a',
	          text: 'William'
	        }, {
	          id: 'b',
	          text: 'Brian'
	        }, {
	          id: 'c',
	          text: 'Luke'
			  }, {
			     id: 'd',
				 text: 'Hobbs'
			  
	        }],
	        correct: 'b'
	      }, 
		  
		  
		  
	    {
          id: 3,
	        text: 'What is the Dyane Carters(The Rock) name in the Move?',
	        choices: [{
	          id: 'a',
	          text: 'Luke Hobbs'
	        }, {
	          id: 'b',
	          text: 'Daniel Carter'
	        }, {
	          id: 'c',
	          text: 'Dominic Torreto'
			  }, {
			     id: 'd',
				 text: 'Brain Okaner'
			  
	        }],
	        correct: 'a'
	      }, 
		  
		  
		  
	    {
          id: 4,
	        text: 'WWhat was one of Doms(Vin diesel) favourite car?',
	        choices: [{
	          id: 'a',
	          text: 'Nissan Skyline R34 GT-R'
	        }, {
	          id: 'b',
	          text: 'Mitsubishi Eclipse'
	        }, {
	          id: 'c',
	          text: 'Bugatti'
			  }, {
			     id: 'd',
				 text: '1970 Dodge Charger'
			  
	        }],
	        correct: 'd'
	      }, 
		  
		  
		{
          id: 5,
	        text: 'WWhat was one of Doms(Vin diesel) favourite car?',
	        choices: [{
	          id: 'a',
	          text: '2013'
	        }, {
	          id: 'b',
	          text: '2014'
	        }, {
	          id: 'c',
	          text: '2015'
			  }, {
			     id: 'd',
				 text: '2016'
			  
	        }],
	        correct: 'a'
	      }, 
      ],
      score: 0,
      current: 1
    }
  }
  
  setCurrent(current) {
    this.setState({current});
  }
  
  
  setScore(score) {
    this.setState({score});
  }
  
  
  render() {
	
  if (this.state.current > this.state.questions.length) {
      var boxscore = '';
      var results = <Results {...this.state}/>
    } else {
      var boxscore = <BoxScore {...this.state} />
      var results = '';
    }
	
	var myStyle =
	{														
		color:'#0000FF'
	}
	var myStyle2 = 
	{
		color:'#FF0000'
	}
	
	
    return (
      <div>
        <h1 style={myStyle}>{boxscore}</h1>
	   <QuestionList setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state}/>
	   <h2 style={myStyle2}>
        {results}
		</h2>
      </div>
    );
  }

  
}export default App;