from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
from .models import *
from django.core.mail import send_mail

class ContactsCreateView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data = self.request.data
        subject = data['subject']
        name = data['name']
        email = data['email']
        message = data['message']
        phone = data['phone']
        budget = data['budget']

        try:
            send_mail(
                subject,
                'Name: ' + name
                + '\nEmail: ' + email
                + '\n\nMessage: \n' + message
                +'\nPhone: ' + phone
                + '\n\nBudget: ' + budget,
                'adrielvallejoskehmeier@gmail.com',
                ['adrielvallejoskehmeier@gmail.com'],
                fail_silently=False

            )

            Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                subject=subject,
                message=message,
                budget=budget,
            )
            return Response({'success': 'Message sent successfully'})
        except:
            return Response({'Error': 'Message error'})




