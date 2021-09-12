from django.http import JsonResponse


def my_api_view(request):
    data = {
        'awsImage': 'https://demo-setup-bucket.s3.us-west-2.amazonaws.com/dentalia-demo-deoctor-5-1-750x750.jpg',
    }
    return JsonResponse(data)
