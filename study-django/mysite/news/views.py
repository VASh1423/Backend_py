from django.shortcuts import render
from django.http import HttpResponse

def index(requests):
    print(requests)
    return HttpResponse('Hello world')

def test(requests):
    return HttpResponse('<h1>Test</h1>')
