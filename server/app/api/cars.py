from fastapi import APIRouter

router = APIRouter()


@router.get("/cars")
def featured_cars():
    return [
        {
            "id": 1,
            "imageUrl": "http://localhost:8000/images/cars/sf-25.webp",
            "shadowColor": "#E80020",
            "name": "Ferrari SF-25",
            "team": "Scuderia Ferrari",
            "engine": "Ferrari 066/11",
        },
        {
            "id": 2,
            "imageUrl": "http://localhost:8000/images/cars/rb21.webp",
            "shadowColor": "#3671C6",
            "name": "Red Bull RB21",
            "team": "Red Bull Racing",
            "engine": "Honda RBPTH003",
        },
        {
            "id": 3,
            "imageUrl": "http://localhost:8000/images/cars/mcl39.webp",
            "shadowColor": "#FF8000",
            "name": "McLaren MCL39",
            "team": "McLaren F1 Team",
            "engine": "Mercedes-AMG F1 M16 E Performance",
        },
    ]
