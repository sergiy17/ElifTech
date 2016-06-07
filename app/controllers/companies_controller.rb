class CompaniesController < ApplicationController
  def index
    @companies = Company.where(parent_id: nil)
    puts @companies.inspect
    respond_to do |format|
      format.html { }
      format.json { }
    end
  end

  def show
    @company = Company.find params[:id]
  end

  def new
    @company = Company.new    
  end

  def edit
    @company = Company.find params[:id]
  end

  def create
    @company = Company.new permited_params
    if @company.save
      flash[:success] = "Created successfully!"
      redirect_to companies_path
    else
      render :action => 'new'
    end
  end

  def update
    @company = Company.find params[:id]
    if @company.update_attributes permited_params
      redirect_to companies_path
    else
      render :action => :edit
    end
  end

  def destroy
    @company = Company.find params[:id]
    @company.destroy
    redirect_to companies_path
  end
 protected
  def permited_params
    params.require(:company).permit(:name, :earnings, :parent_id)
  end
end
