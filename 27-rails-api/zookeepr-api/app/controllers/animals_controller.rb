class AnimalsController < ApplicationController

  def index
    @animals = Animal.all
    render json: @animals, status: :ok
  end

  def show
    @image = Image.find(params[:id])
    # render json: @image.to_json(include: [:reviews]), status: :ok
    render json: @image.reviews_json, status: :ok
  end

  def create
    @animal = Animal.new(animal_params)
    if @animal.save
      render json: @animal, status: :created
    else
      render json: { errors: @animal.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  private
  def animal_params
    params.permit(:name, :image_url, :species)
  end

end
