import React from 'react'
import Medicaina from "../images/Medic'Aina.PNG"
import Annuaire from "../images/Annuaire.PNG"
import Portfolio from "../images/portfolio1.PNG"
import MedicainaWeb from "../images/Medic'Aina Web.PNG"
import{motion}  from 'framer-motion'
export default function Parcours() {
	return (
		<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
>
		<div class="condiv">
			<div class="rn-blog-area rn-section-gap" id="blog">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" class="section-title text-center">
								<h2 class="titreBe">Mes Projets</h2>
							</div>
						</div>
					</div>
					<div class="row row--25 mt--30 mt_md--10 mt_sm--10">
						<div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
							<div class="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
								<div class="inner">
									<div class="thumbnail">
										<a target="blank" href="https://github.com/TracyFinoana/Medoc.git">
											<img src={Medicaina} alt="Personal Portfolio Images" />
										</a>
									</div>
									<div class="content">
										<div class="category-info">
											<div class="category-list">
												<a target="blank" href="https://github.com/TracyFinoana/Medoc.git">C#</a>
											</div>
											<div class="meta">
												<span><i class="feather-clock"></i>Medic'aina</span>
											</div>
										</div>
										<h4 class="title"><a target="blank" href="https://github.com/TracyFinoana/Medoc.git">Une Application de prise de rende-vous médical, faite en C#
											<i class="feather-arrow-up-right"></i></a></h4>
									</div>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" data-aos-duration="500" data-aos-delay="600" data-aos-once="true" class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
							<div class="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
								<div class="inner">
									<div class="thumbnail">
										<a target="blank" href="https://github.com/ChrysR12/Annuaire_Electronique.git">
											<img src={Annuaire} alt="Personal Portfolio Images" />
										</a>
									</div>
									<div class="content">
										<div class="category-info">
											<div class="category-list">
												<a target="blank" href="https://github.com/ChrysR12/Annuaire_Electronique.git">Java</a>
											</div>
											<div class="meta">
												<span><i class="feather-clock"></i>Annuaire</span>
											</div>
										</div>
										<h4 class="title"><a target="blank" href="https://github.com/ChrysR12/Annuaire_Electronique.git">Un Annuaire eletronique , pour notre premier projet chez Inclusiv academy<i
											class="feather-arrow-up-right"></i></a></h4>
									</div>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" data-aos-duration="500" data-aos-delay="800" data-aos-once="true" class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
							<div class="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
								<div class="inner">
									<div class="thumbnail">
										<a target="blank" href="https://github.com/IalyN/medicainaIIIRepo.git">
											<img src={MedicainaWeb} alt="Personal Portfolio Images" />
										</a>
									</div>
									<div class="content">
										<div class="category-info">
											<div class="category-list">
												<a target="blank" href="https://github.com/IalyN/medicainaIIIRepo.git">ReactJs</a>
											</div>
											<div class="meta">
												<span><i class="feather-clock"></i>Medic'aina</span>
											</div>
										</div>
										<h4 class="title"><a target="blank" href="https://github.com/IalyN/medicainaIIIRepo.git">La meme Application de prise de rende-vous médical, version ReacJs<i class="feather-arrow-up-right"></i></a></h4>
									</div>
								</div>
							</div>
						</div>
						<div data-aos="fade-up" data-aos-duration="500" data-aos-delay="800" data-aos-once="true" class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
							<div class="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
								<div class="inner">
									<div class="thumbnail">
										<a target="blank" href="https://portfoliofinoana.netlify.app/">
											<img src={Portfolio} alt="Personal Portfolio Images" />
										</a>
									</div>
									<div class="content">
										<div class="category-info">
											<div class="category-list">
												<a target="blank" href="https://portfoliofinoana.netlify.app/">HTML/CSS/Js</a>
											</div>
											<div class="meta">
												<span><i class="feather-clock"></i>Portfolio</span>
											</div>
										</div>
										<h4 class="title"><a target="blank" href="https://portfoliofinoana.netlify.app/">Mon premier Porfolio sans Framework<i class="feather-arrow-up-right"></i></a></h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</motion.div>
	)
}

