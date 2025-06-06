from fastapi import APIRouter

router = APIRouter()


@router.get("/schedule")
def schedule():
    return {}
