import Image from 'next/image'

import Banner from './image/banner.webp'
import LeavingGAFAM from './image/leaving_gafam.webp'
import D2Infrastructure from './image/d2_infra.webp'
import Signs from './image/signs.webp'

export default function Home() {
  return (
		<main className="grid flex-grow w-screen">
			<div className="p-4 z-10 flex flex-col items-center justify-center row-[2] lg:row-[1] col-[1] mt-[10%]">
				<div className="flex flex-wrap items-stretch justify-center justify-items-stretch gap-4 m-4">
					<div className="max-w-[48rem]">
						<div className="bg-white border border-black rounded">
							<div className="p-4">
								<h1>Charennes: des services libres et éthiques</h1>
							</div>
							<Image src={LeavingGAFAM} alt="Illustration de David Revoy: quitter la planète GAFAM" width={640} className="overflow-hidden aspect-[16/9] object-cover w-full" />
					    <div className="p-4">
								<p>Charennes est un hébergeur de services web dont le but est de fournir des alternatives libres et éthiques aux services des GAFAM.</p>
								<p>Tous nos services sont accessibles gratuitement, sans publicité et sans traçage. Contrairement aux GAFAM, nous ne vendons pas vos données à des tiers.</p>
								<p>Nous avons pour objectif d&apos;intégrer le collectif <a href="https://www.chatons.org/">CHATONS</a>, qui regroupe des hébergeurs respectueux de vos données.</p>
								<p>Les services sont hébergés sur des serveurs dédiés nous appartenant. Nous louons un seul serveur à OVH pour simplifier quelques tâches et améliorer la disponibilité de nos services.</p>
							</div>
						</div>
					</div>
					<div className="max-w-[48rem]">
						<div className="bg-white border border-black rounded flex flex-row">
							<div className="p-4 w-0 min-w-[60%]">
								<h2>À propos</h2>
								<h3>Qui sommes-nous?</h3>
								<p>Nous sommes deux lycéens passionnés d&apos;informatique et prônant le logiciel libre. Nous gérons nous-mêmes tous les services proposés ici et payons les côuts de notre infrastructure de notre propre poche.</p>
								<h3>Nous contacter</h3>
								<p>Vous pouvez nous contacter par e-mail à l&apos;adresse <a href="mailto:admin@charennes.org">admin@charennes.org</a>.</p>
								<h3>Nous soutenir</h3>
								<p>Nous n&apos;avons par besoin de dons pour le moment. Vous pouvez néanmoins soutenir des associations partageant nos valeurs:</p>
								<ul>
									<li><a href="https://www.laquadrature.net/">La Quadrature du Net</a></li>
									<li><a href="https://www.eff.org/">L&apos;Electronic Frontier Foundation</a></li>
									<li><a href="https://www.framasoft.org/">Framasoft</a></li>
									<li><a href="https://www.april.org/">L&apos;April</a></li>
								</ul>
							</div>
							<Image src={D2Infrastructure} alt="Illustration de David Revoy: D2 infrastructure" width={640} className="overflow-hidden max-h-full object-cover" />
						</div>
					</div>
					<div className="max-w-[96rem]">
						<div className="bg-white border border-black rounded">
							<div className="p-4">
								<h2>Accès rapide aux services</h2>
								<a href="/services">Liste complète des services</a>
								<ul>
									<li><a href="/services/mail">E-mail</a>: nous proposons gratuitement des adresses e-mail @charennes.org.</li>
									<li><a href="/services/nextcloud">Nextcloud</a>: une alternative libre à la suite Google. Créez, stockez, partagez et coéditez vos documents.</li>
									<li><a href="/services/invidious">Invidious</a>: une interface web pour consulter YouTube sans traquage ni publicités.</li>
									<li><a href="/services/mastodon">Mastodon</a>: un réseau social décentralisé équivalent à Twitter.</li>
									<li><a href="/services/matrix">Matrix</a>: un service de messagerie instantanée décentralisé.</li>
									<li><a href="/services/searxng">SearXNG</a>: une interface alternative combinant les résultats de plusieurs moteurs de recherche.</li>
									<li><a href="/services/gitea">Gitea</a>: un service d&apos;hébergement de dépôts Git (pour les développeurs informatiques).</li>
									<li><a href="/services/web">Hébergement web</a>: hébergez votre site web sur nos serveurs.</li>
									<li><a href="/services/shell">Shell UNIX</a>: connectez-vous à l&apos;un de nos serveurs en SSH (pour utilisateurs avancés).</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row-[1] col-[1] mb-[-300px] lg:min-h-full lg:h-0">
				<Image src={Banner} alt="Illustration de David Revoy représentant des chats sur une île flottant dans le ciel" width={1920} className="overflow-hidden max-h-full object-cover w-full" />
			</div>
		</main>
  )
}
