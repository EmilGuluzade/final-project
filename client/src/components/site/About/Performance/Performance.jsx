import Counter from "./Counter"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Performance = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <div class="holder py-4 py-md-7 bgcolor">
	<div class="container">
		<div class="row fact-blocks-row lazyloaded">
			<div class="col-sm-6  col-lg-4">
				<div class="fact-block" data-aos="flip-right">
                <Counter target={90} duration={1500} >%</Counter>
					<div class="title">Of excellent reviews</div>
					<div class="text">Nor again is there anyone who loves or pursues or desires
						to obtain pain of itself, because it is pain, but because occasionally in which toil and pain can procure
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-4" >
				<div class="fact-block" data-aos="flip-right">
                <Counter target={1545} duration={1500} ></Counter>
					<div class="title">More sales</div>
					<div class="text">Nor again is there anyone who loves or pursues or desires
						to obtain pain of itself, because it is pain, but because occasionally in which toil and pain can procure
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-4">
				<div class="fact-block" data-aos="flip-right">
                <Counter target={100} duration={1500} >%</Counter>
					
					<div class="title">Happy customers</div>
					<div class="text">Nor again is there anyone who loves or pursues or desires
						to obtain pain of itself, because it is pain, but because occasionally in which toil and pain can procure
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Performance
