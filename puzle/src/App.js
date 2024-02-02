import './App.css';
import { useState } from 'react';

function App() {
  let [b1, setb1] = useState('1')
  let [b2, setb2] = useState('2')
  let [b3, setb3] = useState('3')
  let [b4, setb4] = useState('4')
  let [b5, setb5] = useState('5')
  let [b6, setb6] = useState('6')
  let [b7, setb7] = useState('7')
  let [b8, setb8] = useState('')
  let [b9, setb9] = useState('8')
  // let [b1, setb1] = useState('')
  // let [b2, setb2] = useState('')
  // let [b3, setb3] = useState('')
  // let [b4, setb4] = useState('')
  // let [b5, setb5] = useState('')
  // let [b6, setb6] = useState('')
  // let [b7, setb7] = useState('')
  // let [b8, setb8] = useState('')
  // let [b9, setb9] = useState('')
  let [disp, setdisp] = useState('')

  let t1, t2, t3, t4, t5, t6, t7, t8, t9
  // let t = ['', '', '', '', '', '', '', '', '']
  // const rand = (q) => {
  //   for (let i = 0; i < 9; i++) {
  //     let randome = Math.floor(Math.random() * 9) + 1
  //     if (t.indexOf(randome) >= 0) {
  //       i--
  //     }
  //     else {
  //       if (t[i] === '') {
  //         t[i] = randome
  //       }
  //     }
  //   }
  //   t1=t[0]
  //   t2=t[1]
  //   t3=t[2]
  //   t4=t[3]
  //   t5=t[4]
  //   t6=t[5]
  //   t7=t[6]
  //   t8=t[7]
  //   t9=t[8]
  // }
  // rand(12)
  // // setb1(t[0])
  // // setb2(t[1])
  // // setb3(t[1])
  // // setb4(t[3])
  // // setb5(t[4])
  // // setb6(t[5])
  // // setb7(t[6])
  // // setb8(t[7])
  // // setb9(t[8])
  const change = (id) => {
    t1 = b1
    t2 = b2
    t3 = b3
    t4 = b4
    t5 = b5
    t6 = b6
    t7 = b7
    t8 = b8
    t9 = b9
    console.log(t1)
    if (id === '1') {
      if (t2 === '') {
        t2 = t1;
        t1 = '';
      } else if (t4 === '') {
        t4 = t1;
        t1 = ''
      }
    }
    if (id === '2') {
      if (t1 === '') {
        t1 = t2;
        t2 = '';
      } else if (t5 === '') {
        t5 = t2;
        t2 = ''
      }
      else if (t3 === '') {
        t3 = t2;
        t2 = ''
      }
    }
    if (id === '3') {
      if (t2 === '') {
        t2 = t3;
        t3 = '';
      } else if (t6 === '') {
        t6 = t3;
        t3 = '';
      }
    }
    if (id === '4') {
      if (t1 === '') {
        t1 = t4;
        t4 = '';
      } else if (t5 === '') {
        t5 = t4;
        t4 = ''
      }
      else if (t7 === '') {
        t7 = t4;
        t4 = ''
      }
    }
    if (id === '5') {
      if (t2 === '') {
        t2 = t5;
        t5 = '';
      } else if (t4 === '') {
        t4 = t5;
        t5 = ''
      }
      else if (t6 === '') {
        t6 = t5;
        t5 = ''
      }
      else if (t8 === '') {
        t8 = t5;
        t5 = ''
      }
    }
    if (id === '6') {
      if (t3 === '') {
        t3 = t6;
        t6 = '';
      } else if (t5 === '') {
        t5 = t6;
        t6 = ''
      } else if (t9 === '') {
        t9 = t6;
        t6 = ''
      }
    }
    if (id === '7') {
      if (t4 === '') {
        t4 = t7;
        t7 = ''
      } else if (t8 === '') {
        t8 = t9;
        t9 = '';
      }
    }
    if (id === '8') {
      if (t7 === '') {
        t7 = t8;
        t8 = '';
      } else if (t5 === '') {
        t5 = t8;
        t8 = ''
      } else if (t9 === '') {
        t9 = t8;
        t8 = ''
      }
    }
    if (id === '9') {
      if (t8 === '') {
        t8 = t9;
        t9 = '';
      } else if (t6 === '') {
        t6 = t9;
        t9 = ''
      }
    }
    if (t1 === '1' && t2 === '2' && t3 === '3' && t4 === '4' && t5 === '5' && t6 === '6' && t7 === '7' && t8 === '8') {
      setdisp('Game complited you win')
    }
    setb1(t1)
    setb2(t2)
    setb3(t3)
    setb4(t4)
    setb5(t5)
    setb6(t6)
    setb7(t7)
    setb8(t8)
    setb9(t9)
  }
  return (
    <>
      <div className="main">
        <div className="box">
          <div className="line">
            <input type="button" value={b1} onClick={(e) => { change('1') }} />
            <input type="button" value={b2} onClick={(e) => { change('2') }} />
            <input type="button" value={b3} onClick={(e) => { change('3') }} />
          </div>
          <div className="line">
            <input type="button" value={b4} onClick={(e) => { change('4') }} />
            <input type="button" value={b5} onClick={(e) => { change('5') }} />
            <input type="button" value={b6} onClick={(e) => { change('6') }} />
          </div>
          <div className="line">
            <input type="button" value={b7} onClick={(e) => { change('7') }} />
            <input type="button" value={b8} onClick={(e) => { change('8') }} />
            <input type="button" value={b9} onClick={(e) => { change('9') }} />
          </div>
        </div>
        <input type="text" className='disp' value={disp} /><br />
        <input type="button" className='res' value="Reset" onClick={(e) => {
          setb1('1')
          setb2('2')
          setb3('3')
          setb4('4')
          setb5('5')
          setb6('6')
          setb7('7')
          setb8('')
          setb9('8')
          setdisp('')
        }} />
      </div>
    </>
  );
}

export default App;
