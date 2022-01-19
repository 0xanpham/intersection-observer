import { useEffect, useState, useRef } from 'react';
import './App.scss';

function App() {
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)
  const div3Ref = useRef(null)
  const div4Ref = useRef(null)

  const [showDiv1,setShowDiv1] = useState(false)
  const [showDiv2,setShowDiv2] = useState(false)
  const [showDiv3,setShowDiv3] = useState(false)
  const [showDiv4,setShowDiv4] = useState(false)

  const [currentDiv,setCurrentDiv] = useState(1)

  const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }

  const callback = (entries) => {
    // console.log(entries)
    entries.forEach(entry => {
      if (entry.isIntersecting){
        setCurrentDiv(entry.target.id)
        switch (parseInt(entry.target.id)) {
          case 1:
            setShowDiv1(true)
            break
          case 2:
            setShowDiv2(true)
            break
          case 3:
            setShowDiv3(true)
            break
          case 4:
            setShowDiv4(true)
            break
          default: 
            break
        }
      }
    })
  }

  const observer = new IntersectionObserver(callback,option)

  useEffect(() => {
    if (div1Ref.current) observer.observe(div1Ref.current)
    if (div2Ref.current) observer.observe(div2Ref.current)
    if (div3Ref.current) observer.observe(div3Ref.current)
    if (div4Ref.current) observer.observe(div4Ref.current)
  },[currentDiv,showDiv1,showDiv2,showDiv3,showDiv4])

  return (
    <div className="app">
      <nav>
        <li className={parseInt(currentDiv) === 1 ? "highlight" : ""}>1</li>
        <li className={parseInt(currentDiv) === 2 ? "highlight" : ""}>2</li>
        <li className={parseInt(currentDiv) === 3 ? "highlight" : ""}>3</li>
        <li className={parseInt(currentDiv) === 4 ? "highlight" : ""}>4</li>
      </nav>
      <div id={1} className={showDiv1 ? "show" : ""} ref={div1Ref}>1</div>
      <div id={2} className={showDiv2 ? "show" : ""} ref={div2Ref}>2</div>
      <div id={3} className={showDiv3 ? "show" : ""} ref={div3Ref}>3</div>
      <div id={4} className={showDiv4 ? "show" : ""} ref={div4Ref}>4</div>
    </div>
  );
}

export default App;
