from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # JWT token authentication
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('signup/', views.signup_view, name='signup'),

    path('trips/', views.trip_view, name='trip'), # GET, POST
    path('trips/<int:pk>', views.trip_view_detail, name='trip-detail'), # GET, PUT, DELETE

    path('events/', views.event_view, name='event'), # GET, POST
    path('events/<int:pk>', views.event_view_detail, name='event-detail'), # GET, PUT, DELETE
]