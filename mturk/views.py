# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from mturk.models import Task
from django.views.decorators.csrf import csrf_exempt
NUM = 5

# AMAZON_HOST = "https://workersandbox.mturk.com/mturk/externalSubmit"
AMAZON_HOST = "https://www.mturk.com/mturk/externalSubmit"

@csrf_exempt
def index(request):
    if request.GET.get("assignmentId") == "ASSIGNMENT_ID_NOT_AVAILABLE" or request.GET.get("hitId","") =="":
        render_data = {
            "worker_id": request.GET.get("workerId", ""),
            "assignment_id": request.GET.get("assignmentId", ""),
            "amazon_host": AMAZON_HOST,
            "hit_id": request.GET.get("hitId", ""),
            "image_index": "0",
        }
    else:
        i = 0
        a = Task.objects.all()
        if (len(a) == 0):
            i = 0
        else:
            i = a[len(a)-1].image_index+NUM
        record = Task.objects.filter(hit_id=request.GET.get("hitId", ""))
        if (len(record) == 0):
            Task.objects.create(
                hit_id=request.GET.get("hitId", ""),
                image_index=i
                )
            imageIndex = i
        else:
            imageIndex=record[0].image_index
        render_data = {
            "worker_id": request.GET.get("workerId", ""),
            "assignment_id": request.GET.get("assignmentId", ""),
            "amazon_host": AMAZON_HOST,
            "hit_id": request.GET.get("hitId", ""),
            "image_index": str(imageIndex),
        }
        

    response = render_to_response("index.html", render_data)
    # without this header, your iFrame will not render in Amazon
    response['x-frame-options'] = 'this_can_be_anything'
    return response