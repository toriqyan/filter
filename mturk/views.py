# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from mturk.models import Task
from django.views.decorators.csrf import csrf_exempt

AMAZON_HOST = "https://workersandbox.mturk.com/mturk/externalSubmit"
# AMAZON_HOST = "https://www.mturk.com/mturk/externalSubmit"

@csrf_exempt
def index(request):
    if request.GET.get("assignmentId") == "ASSIGNMENT_ID_NOT_AVAILABLE":
        render_data = {
            "worker_id": request.GET.get("workerId", ""),
            "assignment_id": request.GET.get("assignmentId", ""),
            "amazon_host": AMAZON_HOST,
            "hit_id": request.GET.get("hitId", ""),
            "image_index": "0",
        }
    else:
        record = Task.objects.all()[0].occasion
        Task.objects.all()[0].occasion+=10
        render_data = {
            "worker_id": request.GET.get("workerId", ""),
            "assignment_id": request.GET.get("assignmentId", ""),
            "amazon_host": AMAZON_HOST,
            "hit_id": request.GET.get("hitId", ""),
            "image_index": str(record),
        }
        

    response = render_to_response("index.html", render_data)
    # without this header, your iFrame will not render in Amazon
    response['x-frame-options'] = 'this_can_be_anything'
    return response