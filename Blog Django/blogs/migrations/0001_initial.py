# Generated by Django 4.1.3 on 2024-05-07 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blogs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_title', models.CharField(max_length=50)),
                ('category', models.CharField(default='', max_length=20)),
                ('desc', models.CharField(default='', max_length=3000)),
            ],
        ),
    ]
