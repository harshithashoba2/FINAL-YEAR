from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns =[
    path("register",views.register,name="register"),
    path("login",views.login,name="login"),
    path("contact",views.contact,name="contact"),
    path("/stage1",views.stage1,name="stage1"),
]+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += staticfiles_urlpatterns()