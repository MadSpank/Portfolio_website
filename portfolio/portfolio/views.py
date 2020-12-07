from django.shortcuts import render

def homepage(request):
    return render(request, 'homepage.html')

def send_email(request):
    return render(request, 'email.html')