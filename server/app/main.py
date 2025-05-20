from fastapi import FastAPI, APIRouter
from api import cars, schedule
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.mount("/images", StaticFiles(directory="static"), name="images")


origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=[],
)


api_router = APIRouter(prefix="/api")

api_router.include_router(cars.router)
api_router.include_router(schedule.router)

app.include_router(api_router)
