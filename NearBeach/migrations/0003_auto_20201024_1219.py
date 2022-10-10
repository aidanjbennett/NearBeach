# Generated by Django 3.1.2 on 2020-10-24 01:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("NearBeach", "0002_initialise_data"),
    ]

    operations = [
        migrations.AlterField(
            model_name="about_user",
            name="is_deleted",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="document",
            name="is_deleted",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="group_permission",
            name="is_deleted",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="kanban_board",
            name="is_deleted",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="kanban_card",
            name="is_deleted",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="kanban_column",
            name="is_deleted",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="kanban_comment",
            name="is_deleted",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="kanban_level",
            name="is_deleted",
            field=models.BooleanField(default=False),
        ),
    ]
