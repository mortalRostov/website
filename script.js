name = window.prompt("твоё погоняло:")
alert("Всё, теперь на районе ты будешь " + name + ", твой айпи: 192.168.0.200")
let myAdmin = confirm("Ты робот?")
if (myAdmin)
{
    alert("Добро пожаловать на сайт, нпс " + name)
}
else
{
    window.close()
}