import Image from 'next/image'

import Banner from './image/banner.webp'

export default function Home() {
  return (
		<main className="grid flex-grow w-screen">
			<div className="p-4 z-10 flex flex-col items-center justify-start row-[2] sm:row-[1] col-[1] mt-[10%]">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<div className="bg-white border border-black rounded p-4">
							<h2>Charennes: des services libres et éthiques</h2>
							<p>Charennes est un hébergeur de services web dont le but est de fournir des alternatives libres et éthiques aux services des GAFAM.</p>
							<p>Tous nos services sont accessibles gratuitement, sans publicité et sans traçage. Contrairement aux GAFAM, nous ne vendons pas vos données à des tiers.</p>
							<p>Nous avons pour objectif d&lsquo;intégrer le collectif <a href="https://www.chatons.org/">CHATONS</a>, qui regroupe des hébergeurs respectueux de vos données.</p>
							<p>Les services sont hébergés sur des serveurs dédiés nous appartenant. Nous ne louons pas de serveurs chez des prestataires tiers.</p>
						</div>
					</div>
					<div>
						<div className="bg-white border border-black rounded p-4">
							<h2>Accès rapide aux services</h2>
							<a href="/services">Liste complète des services</a>
							<ul>
								<li><a href="/services/mail">Roundcube</a>: accédez à votre boîte mail depuis votre navigateur web.</li>
								<li><a href="/services/nextcloud">Nextcloud</a>: une alternative libre à la suite Google. Créez, stockez, partagez et coéditez vos documents.</li>
								<li><a href="/services/invidious">Invidious</a>: une interface web pour consulter YouTube sans traquage ni publicités.</li>
								<li><a href="/services/mastodon">Mastodon</a>: un réseau social décentralisé.</li>
								<li><a href="/services/matrix">Matrix</a>: un service de messagerie instantanée décentralisé.</li>
								<li><a href="/services/searxng">SearXNG</a>: une interface alternative combinant les résultats de plusieurs moteurs de recherche.</li>
								<li><a href="/services/gitea">Gitea</a>: un service d&lsquo;hébergement de dépôts Git (pour les développeurs informatiques).</li>
								<li><a href="/services/web">Hébergement web</a>: hébergez votre site web sur nos serveurs.</li>
								<li><a href="/services/shell">Shell UNIX</a>: connectez-vous à l&lsquo;un de nos serveurs en SSH (pour utilisateurs avancés).</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row-[1] col-[1] mb-[-100px] sm:min-h-full sm:h-0">
				<Image src={Banner} alt="Dessin de David Revoy représentant des chats sur une île flottant dans le ciel" width={1920} className="overflow-hidden max-h-full object-cover w-full" />
			</div>
		</main>
  )
}
