from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # path('login/', views.login_view, name='api-login'),
    # path('logout/', views.logout_view, name='api-logout'),
    # path('signup/', views.signup_view, name='api-signup'),
    # path('user/', views.user_view, name='api-user'),

    # path('itineraries/', views.itinerary_view, name='api-itinerary'), # GET, POST
    # path('itineraries/<int:pk>', views.itinerary_view_detail, name='api-itinerary-detail'), # GET, PUT, DELETE

    # path('events/', views.event_view, name='api-event'), # GET, POST
    # path('events/<int:pk>', views.event_view_detail, name='api-event-detail'), # GET, PUT, DELETE
]