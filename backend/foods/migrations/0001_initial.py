# Generated by Django 2.2.12 on 2021-01-23 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ingredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=240, verbose_name='Name')),
                ('store', models.CharField(max_length=240, verbose_name='Store')),
                ('price', models.FloatField(verbose_name='Price')),
            ],
        ),
    ]