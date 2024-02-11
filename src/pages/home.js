function Home (){

//     window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("move-top").style.display = "block";
// 	document.getElementById("sticky-head").style.position = "fixed";
//   } else {
//     document.getElementById("move-top").style.display = "none";
// 	document.getElementById("sticky-head").style.position = "relative";
//   }
// }
// function movetop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
    return(
        <>
        
      

<div className="container-fluid bg-img p-0 m-0 w-100">
</div>
<div className="container-fluid p-0 m-0">
    <div className="overlay">
    <div className="container">
        <div className="row">
            <div className="home-section">
            <h1>Web Developer</h1>
            <p>Bring your dreams to life</p>
            <button><a className="btn" href="/">Hire Me</a></button>

            </div>
        </div>
    </div>
    </div>
</div> 
{/* <span onclick="movetop()" id="move-top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></span> */}

        </>
    )
}
export default Home;