// Projects.js
export default function Projects() {
	return (
		<section id="projects"
				className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-emerald-500 font-bold text-center">
				My Projects
			</h2>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<img src=
"https://sectigostore.com/blog/wp-content/uploads/2020/09/malware-analysis-feature.jpg"/>
							Andriod Malware Analysis
						
					</h2>
					<p>
						This project is built with using machine learning models to detect Malicious andriod malware using Active learning methodology.
					</p>
				</div>
			</div>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
"https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
					className="w-full h-full">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
							alt="Project 2"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href=
"https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
							15 Puzzle Game
						</a>
					</h2>
					<p>
						15 puzzle game is basically a tile-based game in which there are 16 tiles
						out of which 1 tile is left empty and the remaining tiles are filled with
						numbers from 1 to 15 in random order. The user has to arrange all the tiles 
						in numerical order with the rule that they can only move the tile that is 
						a direct neighbor of the empty tile.
					</p>
				</div>
			</div>
		</section>
	);
}
