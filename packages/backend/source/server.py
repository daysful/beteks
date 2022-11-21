from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from source.simulation import Simulation, SimulationOptionsModel



def generate_server():
    app = FastAPI()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
    )

    simulations: dict[str, Simulation] = {}

    @app.get("/")
    async def __root__():
        simulations_data = {}
        for key, val in simulations.items():
            simulations_data[key] = {
                "name": val.name
            }

        return {
            "status": True,
            "simulations": simulations_data,
        }

    @app.post("/new")
    async def __new__(options: SimulationOptionsModel = None):
        simulation = Simulation(options)
        simulations[simulation.id] = simulation

        return {
            "status": True,
            "simulationID": simulation.id,
        }

    @app.get("/status")
    async def __status__(simulationID: str):
        simulation = simulations.get(simulationID)
        if not simulation:
            return {
                "status": False,
            }

        return {
            "status": True,
            "simulation": simulation,
        }

    @app.post("/start")
    async def __start__(simulationID: str):
        simulation = simulations.get(simulationID)
        if not simulation:
            return {
                "status": False,
            }

        simulation.start()
        return {
            "status": True,
        }

    @app.post("/stop")
    async def __stop__(simulationID: str):
        simulation = simulations.get(simulationID)
        if not simulation:
            return {
                "status": False,
            }

        simulation.stop()
        return {
            "status": True,
        }

    return app
