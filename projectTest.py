#####Resources#####
# https://kivy.org/docs/guide/basic.html
# https://kivy.org/docs/api-kivy.uix.button.html
# https://kivy.org/docs/guide/widgets.html
# https://stackoverflow.com/questions/41645290/setting-grid-column-width-in-kivys-gridlayout#41651791
# https://stackoverflow.com/questions/45163457/how-to-dynamically-create-layouts-inside-screen-in-kivy
# https://stackoverflow.com/questions/23127203/bind-function-to-kivy-button

from kivy.app import App
from kivy.uix.gridlayout import GridLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.togglebutton import ToggleButton


class LoginScreen(BoxLayout):
    def __init__(self, **kwargs):
        super(LoginScreen, self).__init__(**kwargs)

        self.orientation = "vertical"  # Screen is defined as containing a vertical BoxLayout

        top_layout = GridLayout(cols=5, size_hint=(1, 0.3))  # Top domain selection bar, resize grid heights
        self.add_widget(top_layout)  # Include layout into main screen instance

        middle_layout = BoxLayout(orientation="vertical")  # This will be card areas and filter buttons
        self.add_widget(middle_layout) # Include into instance
        middle_layout.add_widget(Label(text="cards and filter buttons somewhere here"))

        btn1 = ToggleButton(text='Testing', group="top_bar")
        btn1.bind(on_press=self.callback)
        top_layout.add_widget(btn1)

        btn2 = ToggleButton(text='Logging', group="top_bar")
        btn2.bind(on_press=self.callback)
        top_layout.add_widget(btn2)

        btn3 = ToggleButton(text='Utilities', group="top_bar")
        btn3.bind(on_press=self.callback)
        top_layout.add_widget(btn3)

        btn4 = ToggleButton(text='Mocking', group="top_bar")
        btn4.bind(on_press=self.callback)
        top_layout.add_widget(btn4)

        btn5 = ToggleButton(text='Cryptography', group="top_bar")
        btn5.bind(on_press=self.callback)
        top_layout.add_widget(btn5)

        btn6 = ToggleButton(text='JSON', group="top_bar")
        btn6.bind(on_press=self.callback)
        top_layout.add_widget(btn6)

        btn7 = ToggleButton(text='Databases', group="top_bar")
        btn7.bind(on_press=self.callback)
        top_layout.add_widget(btn7)

        btn8 = ToggleButton(text='Security', group="top_bar")
        btn8.bind(on_press=self.callback)
        top_layout.add_widget(btn8)

        btn9 = ToggleButton(text='OBJ Mapping', group="top_bar")
        btn9.bind(on_press=self.callback)
        top_layout.add_widget(btn9)

        btn10 = ToggleButton(text='XML', group="top_bar")
        btn10.bind(on_press=self.callback)
        top_layout.add_widget(btn10)


    def callback(self, instance):
        print('The button <%s> is being pressed' % instance.text)

class MyApp(App):

    def build(self):
        return LoginScreen()

if __name__ == '__main__':
    MyApp().run()