# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
from mturk.models import Task

# AMAZON_HOST = "https://workersandbox.mturk.com/mturk/externalSubmit"
# AMAZON_HOST = "https://www.mturk.com/mturk/externalSubmit"

@csrf_exempt
def index(request):
    Task.objects.create(
        image = request.GET.get("image", ""),
        reject = request.GET.get("reject",""),
    )
    db_rows = Task.objects.filter(workerId = request.GET.get("workerId", ""))
    render_data = {
        "image_index": str(len(db_rows)),
    }

    response = render_to_response("index.html", render_data)
    # without this header, your iFrame will not render in Amazon
    response['x-frame-options'] = 'this_can_be_anything'
    return response